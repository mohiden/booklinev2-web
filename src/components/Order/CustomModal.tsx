import { IShipmentItem } from "@core";
import { OrderInput } from "@lib";
import { useCustomStore } from "@stores";
import { AutoComplete, Form, Input, Modal, Select } from "antd";
import React from "react";
const { Option } = Select;

interface CustomModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  callback: (values: OrderInput) => void;
  item: IShipmentItem | undefined;
  errorText: string;
  loading: boolean;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  title,
  callback,
  visible,
  setVisible,
  item,
  errorText,
  loading,
}) => {
  const {
    customersDetail: { names, phones, addresses },
  } = useCustomStore();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title={title}
      okText={title}
      onOk={() => form.submit()}
      confirmLoading={loading}
      onCancel={() => setVisible(false)}
      destroyOnClose
    >
      <Form
        form={form}
        size="large"
        initialValues={{
          amount: 1,
          discount: 0,
        }}
        onFinish={(values) => {
          const body: OrderInput = {
            name: values.name,
            address: values.address,
            phone: values.phone,
            type: values.type,
            items: [
              {
                shipmentItem: item!._id as any,
                amount: Number(values.amount),
                discount: Number(values.discount),
              },
            ],
          };
          callback(body);
        }}
      >
        <Form.Item name="name" rules={[{ required: true }]}>
          <AutoComplete options={names} placeholder="name" />
        </Form.Item>
        <Form.Item name="address" rules={[{ required: true }]}>
          <AutoComplete options={addresses} placeholder="address" />
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true }]}>
          <AutoComplete options={phones} placeholder="phones" />
        </Form.Item>
        <Form.Item name="type" label="Type" rules={[{ required: true }]}>
          <Select allowClear>
            <Option value="BOOK">Book</Option>
            <Option value="OTHER">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="amount" label="Amount">
          <Input type={"number"} style={{ width: "5rem" }} />
        </Form.Item>
        <Form.Item name="discount" label="discount">
          <Input type={"number"} style={{ width: "5rem" }} />
        </Form.Item>
      </Form>
      <span style={{ color: "red", fontWeight: "bold" }}>
        {errorText && errorText}
      </span>
    </Modal>
  );
};
