import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Api } from "@api";
import { IOrder, IShipmentItem } from "@core";
import { AxiosError } from "axios";
import Column from "antd/lib/table/Column";
import { Table, Tag } from "antd";
import { notify } from "@utils";

export const Orders = () => {
  const { data, isLoading, isError, error } = useQuery<IOrder[], AxiosError>(
    "getOrders",
    () => Api.get<IOrder[]>("order/?page=0&size=0").then((res) => res.data)
  );
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  if (isError) {
    notify(error?.response?.data, "error", "any desc");
    return <h1></h1>;
  }
  return (
    <>
      <div className="order-top"></div>
      <Table
        dataSource={orders}
        rowKey={(data) => data._id}
        loading={isLoading}
        pagination={{
          pageSize: 10,
          total: orders.length,
        }}
      >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Phone#" dataIndex="phone" key="phone" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Quantity" dataIndex="amount" key="qty" />
        <Column
          title="Books"
          dataIndex="shipmentItem"
          key="books"
          render={(item: IShipmentItem) => (
            <>
              <Tag color="blue" key={item._id}>
                {item.name}
              </Tag>
            </>
          )}
        />
        <Column title="Total Price" dataIndex="totalPrice" key="price" />
        <Column title="Discount" dataIndex="discount" key="discount" />
      </Table>
    </>
  );
};
