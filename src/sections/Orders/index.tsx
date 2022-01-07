import React, { useState } from "react";
import { useQuery } from "react-query";
import { IItem, IOrder } from "@core";
import { AxiosError } from "axios";
import Column from "antd/lib/table/Column";
import { Table, Tag } from "antd";
import { paginatedOptions, notify } from "@utils";
import { queries } from "@api";
import { CreateOrderDrawer, RenderItemsTable, TableTopArea } from "@components";
export const Orders = () => {
  const [searchText, setSearchText] = useState("");
  //useQuery axios get method
  const {
    order: { getOrders },
  } = queries;
  //create request url
  const url = paginatedOptions<IOrder>("order", [], 0, 0, searchText);
  //send request using react-query
  const { data, isLoading, isRefetching, isError, error } = useQuery<
    IOrder[],
    AxiosError
  >([getOrders.queryName, searchText], () => getOrders.queryFn(url));

  const [visible, setVisible] = useState(false);

  //error handling
  if (isError) {
    notify(error?.response?.data, "error", "any desc");
    return <h1>{""}</h1>;
  }
  const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
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
      <CreateOrderDrawer visible={visible} setVisible={setVisible} />

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
          render={(t: number) => <Tag color="success">${t}</Tag>}
        />
      </Table>
    </>
  );
};
