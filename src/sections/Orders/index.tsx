import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { IItem, IOrder } from "@core";
import { AxiosError } from "axios";
import Column from "antd/lib/table/Column";
import { FormInstance, Table, Tag } from "antd";
import { paginatedOptions, notify } from "@utils";
import { mutations, queries } from "@api";
import { CreateOrderDrawer, RenderItemsTable, TableTopArea } from "@components";
import { OrderInput } from "@lib";
export const Orders = () => {
  const [searchText, setSearchText] = useState("");
  //useQuery axios get method
  const {
    order: { getOrders },
  } = queries;
  const {
    order: { createOrder },
  } = mutations;
  //create request url
  const url = paginatedOptions<IOrder>("order", [], 0, 0, searchText);
  //send request using react-query
  const { data, isLoading, isRefetching, isError, error } = useQuery<
    IOrder[],
    AxiosError
  >([getOrders.queryName, searchText], () => getOrders.queryFn(url), {
    refetchOnWindowFocus: false,
  });

  //create order mutation request
  const postOrder = useMutation<any, AxiosError, OrderInput>(
    (input: OrderInput) => createOrder.mutationFn(input)
  );

  const queryClient = useQueryClient();

  const [visible, setVisible] = useState(false);
  const [errorText, setErrorText] = useState("");

  //error handling
  if (isError) {
    notify(error?.response?.data, "error", "any desc");
    return <h1>{""}</h1>;
  }
  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onOrderSubmitHandler = (order: OrderInput, form: FormInstance<any>) => {
    console.log(order);
    postOrder.mutate(
      { ...order },
      {
        onSuccess: (data) => {
          setVisible(false);
          notify("Order Added", "success", "");
          queryClient.invalidateQueries(queries.order.getOrders.queryName);
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
      <TableTopArea
        onSearch={onSearchHandler}
        btnText="Create Order"
        callback={() => {
          setVisible(!visible);
        }}
      />
      <CreateOrderDrawer
        visible={visible}
        setVisible={setVisible}
        callback={onOrderSubmitHandler}
        errorText={errorText}
        isLoading={postOrder.isLoading}
      />

      <Table
        dataSource={data}
        rowKey={(data) => data._id}
        loading={isLoading || isRefetching}
        bordered
        pagination={{
          pageSize: 10,
          total: data?.length,
        }}
        expandable={{
          expandRowByClick: true,
          expandedRowRender: (row) => (
            <RenderItemsTable items={row.items} currentOrder={row} />
          ),
        }}
      >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Phone#" dataIndex="phone" key="phone" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Items"
          dataIndex="items"
          key="items"
          render={(items: IItem[]) => {
            return <Tag color="magenta">{items.length}</Tag>;
          }}
        />
        <Column
          title="Total Price"
          dataIndex="totalPrice"
          key="price"
          render={(price: number) => <Tag color="success">${price}</Tag>}
        />
      </Table>
    </>
  );
};
