import React, { useState } from "react";
import { Table, Tag } from "antd";
import { useCreateOrderMutation, useOrdersQuery } from "@generated";
import { CustomModal } from "@components";
import { Order } from "@lib";
const { Column } = Table;

export const Orders = () => {
  const { data, loading, error } = useOrdersQuery();
  const [visible, setVisible] = useState<boolean>(false);
  const [currentOrder, setCurrentOrder] = useState<Order | undefined>();
  const columns: any = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phone",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Books",
      dataIndex: "books",
      key: "books",
      render: (books: any) => (
        <>
          {books.map((tag: any) => {
            let color = tag.length > 8 ? "geekblue" : "green";
            if (tag === "atomic habits") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => <h1>FUCK this</h1>,
    },
  ];

  async function handleChange(value: string) {
    console.log(value);
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        <img
          onClick={() => {
            setVisible(true);
            setCurrentOrder(undefined);
          }}
          style={{
            maxWidth: "100%",
            width: "40px",
            marginLeft: "auto",
            marginRight: "1rem",
          }}
          src="/assets/images/icon_add.png"
          alt="addIcon"
        />
      </div>
      <Table dataSource={data?.orders} rowKey={(b) => b.name} loading={loading}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Phone #" dataIndex="phoneNumber" key="phone" />
        <Column title="Area" dataIndex="area" key="area" />
        <Column
          title="Books"
          dataIndex="books"
          key="books"
          render={(books: any) => (
            <>
              {books.map((book: any) => (
                <Tag color="blue" key={book}>
                  {book}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Actions"
          key="actions"
          render={(obj) => {
            return (
              <div>
                <img
                  style={{
                    maxWidth: "100%",
                    width: "25px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                  src="/assets/images/icon_edit.png"
                  alt="editIcon"
                  onClick={() => {
                    setCurrentOrder(obj);
                    setVisible(true);
                  }}
                />
                <img
                  style={{ maxWidth: "100%", width: "25px", cursor: "pointer" }}
                  src="/assets/images/icon_delete.png"
                  alt="editIcon"
                />
              </div>
            );
          }}
        />
      </Table>

      {!currentOrder && (
        <CustomModal
          visible={visible}
          setVisible={setVisible}
          title={"Add"}
          callback={() => {}}
        />
      )}
      {currentOrder && (
        <CustomModal
          title={"Update"}
          visible={visible}
          setVisible={setVisible}
          order={currentOrder}
          callback={() => {}}
        />
      )}
    </>
  );
};
