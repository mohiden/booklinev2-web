import { IItem } from "@core";
import { Table, Tag } from "antd";
import Column from "antd/lib/table/Column";
import React from "react";

interface Props {
  items: IItem[];
}

export const RenderItemsTable = ({ items }: Props) => {
  return (
    <Table bordered dataSource={items} pagination={false}>
      <Column
        title="Name"
        dataIndex={["shipmentItem", "name"]}
        key="name"
      ></Column>
      <Column title="Amount" dataIndex="amount" key="amount "></Column>
      <Column
        title="Price"
        dataIndex={["shipmentItem", "price"]}
        key="price"
        render={(price: number) => <Tag color="success">${price}</Tag>}
      ></Column>
      <Column title="Discount" dataIndex="discount" key="discount"></Column>
    </Table>
  );
};
