import React, { useState } from "react";
import { Pagination, Table, Tag } from "antd";
import {
  useCreateOrderMutation,
  useOrdersQuery,
  useUpdateOrderMutation,
} from "@generated";
import { CustomModal } from "@components";
import { Order } from "@lib";
import { notify } from "@utils";
import { count } from "console";
const { Column } = Table;

export const Orders = () => {
  const { data, loading, refetch } = useOrdersQuery();
  const [visible, setVisible] = useState<boolean>(false);
  const [currentOrder, setCurrentOrder] = useState<Order | undefined>();
  const [modalType, setModalType] = useState<"new" | "update">("new");
  const [createOrder, {}] = useCreateOrderMutation();
  const [updateOrder, {}] = useUpdateOrderMutation();

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

  const onModalFormSubmitHandler = async (body: Order) => {
    try {
      let res;
      if (modalType === "new") {
        res = await createOrder({
          variables: {
            ...body,
            isDelivered: false,
          },
        });
      } else {
        res = await updateOrder({
          variables: {
            ...body,
            isDelivered: false,
            orderId: currentOrder?._id as string,
          },
        });
      }
      if (res && !res.errors) {
        setVisible(false);
        notify("Notification", "success", "Operation successfully completed");
        refetch();
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="order-top">
        <img
          onClick={() => {
            setModalType("new");
            setCurrentOrder(undefined);
            setVisible(true);
          }}
          className="add-icon"
          src="/assets/images/icon_add.png"
          alt="addIcon"
        />
      </div>
      <Table
        dataSource={data?.orders}
        rowKey={(b) => b.updatedAt}
        loading={loading}
        pagination={{
          pageSize: 10,
          responsive: true,
          showLessItems: true,
          total: data?.orders.length,
        }}
      >
        <Column title="Name" dataIndex="name" key="_id" />
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
                    marginRight: "10px",
                  }}
                  className="action-icon"
                  src="/assets/images/icon_edit.png"
                  alt="editIcon"
                  onClick={() => {
                    setModalType("update");
                    setCurrentOrder(obj);
                    setVisible(true);
                  }}
                />
                <img
                  className="action-icon"
                  src="/assets/images/icon_delete.png"
                  alt="deleteIcon"
                  onClick={() => {
                    notify("msg", "success", "msg");
                  }}
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
          onFormSubmitHandler={onModalFormSubmitHandler}
        />
      )}
      {currentOrder && (
        <CustomModal
          title={"Update"}
          visible={visible}
          setVisible={setVisible}
          order={currentOrder}
          callback={() => {}}
          onFormSubmitHandler={onModalFormSubmitHandler}
        />
      )}
    </>
  );
};
