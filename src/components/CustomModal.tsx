import { Order } from "@lib";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";

interface CustomModaProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  order?: Order | undefined;
  title: string;
  callback: (values: any) => void;
}

export const CustomModal: React.FC<CustomModaProps> = ({
  title,
  callback,
  visible,
  setVisible,
  order,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title={title}
      okText={title}
      onOk={() => form.submit()}
      onCancel={() => setVisible(false)}
    >
      <Form
        form={form}
        initialValues={{
          name: order?.name ?? "",
          area: order?.area ?? "",
          phoneNumber: order?.phoneNumber ?? "",
          books: order?.books ?? [],
        }}
        size="large"
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Form.Item name="name">
          <Input type="text" placeholder="name" defaultValue="hlesfk" />
        </Form.Item>

        <Form.Item name="area">
          <Input type="text" placeholder="area" />
        </Form.Item>
        <Form.Item name="phoneNumber">
          <Input type="text" placeholder="phone #" />
        </Form.Item>
        <Form.Item name="books">
          <Select mode="tags" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
