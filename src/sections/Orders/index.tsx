import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getOrders } from "@api";
import { IItem, IOrder } from "@core";
import { AxiosError } from "axios";
import Column from "antd/lib/table/Column";
import { Table } from "antd";
import { paginatedOptions, notify } from "@utils";
import ColumnGroup from "antd/lib/table/ColumnGroup";

export const Orders = () => {
  //create request url
  const url = paginatedOptions<IOrder>("order", ["items", "phone"]);
  //send request using react-query
  const { data, isLoading, isError, error } = useQuery<IOrder[], AxiosError>(
    getOrders.queryName,
    () => getOrders.queryFn(url)
  );

  // storing data in useState
  const [orders, setOrders] = useState<IOrder[]>([]);

  //setting the data
  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  //error handling
  if (isError) {
    notify(error?.response?.data, "error", "any desc");
    return <h1>{""}</h1>;
  }
  return (
    <>
      <Table
        dataSource={orders}
        rowKey={(data) => data._id}
        loading={isLoading}
        bordered
        pagination={{
          pageSize: 10,
          total: orders.length,
        }}
      >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Phone#" dataIndex="phone" key="phone" />
        <Column title="Address" dataIndex="address" key="address" />
        <ColumnGroup title="items">
          {orders.map((order, idx) => (
            <>
              <Column
                title="name"
                dataIndex="items"
                key="books"
                render={(items: IItem[]) => (
                  <>
                    <span>{items[idx].shipmentItem.name}</span>
                  </>
                )}
              />
              <Column
                title="amount"
                dataIndex="items"
                key="books"
                render={(items: IItem[]) => (
                  <>
                    <span>{items[idx].shipmentItem.name}</span>
                  </>
                )}
              />
            </>
          ))}
        </ColumnGroup>
        <Column title="Total Price" dataIndex="totalPrice" key="price" />
      </Table>
    </>
  );
};
