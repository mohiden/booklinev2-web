import { mutations, queries } from "@api";
import { PlaceOrderModal, TableTopArea } from "@components";
import { IShipmentItem } from "@core";
import { OrderInput } from "@lib";
import { notify, paginatedOptions } from "@utils";
import { Badge, Button, FormInstance, Table } from "antd";
import Column from "antd/lib/table/Column";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface Props {
  id: string;
}

export const RenderExtendedTable = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const [searchText, setSearchText] = useState("");
  //generate request url
  const url = paginatedOptions<IShipmentItem>(
    "shipmentItem",
    [],
    0,
    0,
    searchText
  );
  //reactQuery requests
  const {
    shipmentItem: { getShipmentItems },
  } = queries;
  const {
    order: { createOrder },
  } = mutations;
  //sending request
  const { data, isLoading } = useQuery(
    [getShipmentItems.queryName, searchText],
    () => getShipmentItems.queryFn(url)
  );
  //create order mutation request
  const postOrder = useMutation<any, AxiosError, OrderInput>(
    (input: OrderInput) => createOrder.mutationFn(input)
  );
  //storing data in useState
  const [shipmentItems, setShipmentItems] = useState<IShipmentItem[]>([]);
  const [item, setItem] = useState<IShipmentItem>();
  const [errorText, setErrorText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setShipmentItems(data.filter((item) => item?.shipment?._id === id));
    }
  }, [data, id, searchText]);

  const renderSearchBar = () => {
    return (
      <TableTopArea
        btnText="Create"
        onSearch={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
          setSearchText(e.target.value);
        }}
        callback={() => {}}
      />
    );
  };

  const onFormSubmitHandler = async (
    values: OrderInput,
    form: FormInstance<any>
  ) => {
    postOrder.mutate(
      { ...values },
      {
        onSuccess: (data) => {
          console.log(data);
          setVisible(false);
          notify("Order Added", "success", "");
          queryClient.invalidateQueries(
            queries.shipmentItem.getShipmentItems.queryName
          );
          form.resetFields();
          setErrorText("");
        },
        onError: (error) => {
          setErrorText(
            error?.response?.data?.issues
              ? error.response.data?.issues[0]?.message
              : error.response?.data
          );
        },
      }
    );
  };

  return (
    <>
      <PlaceOrderModal
        visible={visible}
        setVisible={setVisible}
        callback={onFormSubmitHandler}
        title="Place order"
        item={item}
        errorText={errorText}
        loading={postOrder.isLoading}
      />
      <Table
        title={renderSearchBar}
        dataSource={shipmentItems}
        rowKey={(row) => row._id}
        loading={isLoading}
        pagination={{
          pageSize: 5,
          total: shipmentItems.length,
        }}
      >
        {/* <Column title="ID" dataIndex="_id" key="id" /> */}
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Type" dataIndex="type" key="type" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Amount left" dataIndex="left" key="left" />
        <Column
          title="Available"
          dataIndex="left"
          key="left"
          render={(left: number) => {
            const isAvailable = left <= 0;
            return (
              <Badge
                status={isAvailable ? "error" : "success"}
                text={isAvailable ? "out of stock" : "in stock"}
              />
            );
          }}
        />
        <Column
          title="Actions"
          dataIndex="_id"
          key="left"
          render={(id: string) => {
            const outOfStock =
              shipmentItems.find((s) => s._id === id)!.left <= 0;
            return (
              <Button
                disabled={outOfStock}
                size="small"
                onClick={() => {
                  setItem(shipmentItems.filter((s) => s._id === id)[0]);
                  setVisible(!visible);
                }}
              >
                Place order
              </Button>
            );
          }}
        />
      </Table>
    </>
  );
};
