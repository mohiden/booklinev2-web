import { Order } from "@lib";
import { notify } from "@utils";
import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect } from "react";

interface CustomModaProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  order?: Order | undefined;
  title: string;
  callback: (values: any) => void;
  onFormSubmitHandler: (body: Order) => void;
}

export const CustomModal: React.FC<CustomModaProps> = ({
  title,
  callback,
  visible,
  setVisible,
  order,
  onFormSubmitHandler,
}) => {
  const [form] = Form.useForm();

  async function onSubmitHander(values: Order) {
    console.log("SUBMITTING", values);
    onFormSubmitHandler(values);
  }
  return (
    <Modal
      visible={visible}
      title={title}
      okText={title}
      onOk={() => form.submit()}
      confirmLoading={true}
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
        onFinish={onSubmitHander}
      >
        <Form.Item name="name">
          <Input type="text" placeholder="name" />
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
