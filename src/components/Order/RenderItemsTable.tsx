import { queries } from "@api";
import { IItem, IOrder } from "@core";
import { Badge, Button, Popconfirm, Table, Tag } from "antd";
import Column from "antd/lib/table/Column";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { successMessage } from "@utils";

interface Props {
  items: IItem[];
  currentOrder: IOrder;
}

export const RenderItemsTable = ({ items, currentOrder }: Props) => {
  const {
    order: { mark_as_delivered, getOrders },
  } = queries;
  const queryClient = useQueryClient();
  const { refetch, isLoading } = useQuery(
    [mark_as_delivered.queryName],
    () =>
      mark_as_delivered.queryFn(`order/mark_as_delivered/${orderId}/${itemId}`),
    {
      enabled: false,
    }
  );
  const [orderId, setOrderId] = useState("");
  const [itemId, setItemId] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setOrderId(currentOrder._id);
    return () => {
      setOrderId("");
    };
  }, [currentOrder]);

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
      <Column
        title="Delivered"
        dataIndex="isDelivered"
        key="delivered"
        render={(delivered: boolean, record: IOrder, index) => {
          setItemId(record._id);
          return (
            <>
              <Badge
                text={delivered ? "Yes " : ""}
                status={delivered ? "success" : "error"}
              />
              {!delivered && (
                <Popconfirm
                  key={index}
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  title="are you sure?"
                  destroyTooltipOnHide
                  visible={itemId === record._id ? visible : false}
                  onConfirm={async () => {
                    await refetch();
                    await queryClient.invalidateQueries(getOrders.queryName);
                    setVisible(false);
                    successMessage("marked as Delivered!");
                  }}
                  onCancel={() => {
                    setVisible(false);
                  }}
                >
                  <Button
                    key={index}
                    size="small"
                    type="link"
                    onMouseOver={() => setItemId(record._id)}
                    onClick={() => {
                      setItemId(record._id);
                      itemId === record._id && setVisible(true);
                      console.log(itemId);
                    }}
                    loading={isLoading}
                  >
                    Mark as delivered{record._id}
                  </Button>
                </Popconfirm>
              )}
            </>
          );
        }}
      />
    </Table>
  );
};
