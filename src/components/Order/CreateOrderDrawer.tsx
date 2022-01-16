import { queries } from "@api";
import { IShipmentItem } from "@core";
import { paginatedOptions } from "@utils";
import {
  AutoComplete,
  Button,
  Drawer,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { usePublicStore } from "@stores";
import { OrderInput } from "@lib";
const { Option } = Select;
interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  callback: (values: OrderInput, form: FormInstance<any>) => void;
  errorText: string;
  isLoading: boolean;
}

export const CreateOrderDrawer: React.FC<Props> = ({
  visible,
  setVisible,
  callback,
  errorText,
  isLoading,
}) => {
  const [form] = Form.useForm();
  const url = paginatedOptions<IShipmentItem>("shipmentItem", [], 0, 0, "");
  const {
    shipmentItem: { getShipmentItems },
  } = queries;
  const { data } = useQuery(getShipmentItems.queryName, () =>
    getShipmentItems.queryFn(url)
  );
  const {
    customersDetail: { names, addresses, phones },
  } = usePublicStore();
  // const [items] = useState(
  //   data
  //     ?.filter((i) => i.left > 0)
  //     .map((item) => {
  //       return {
  //         value: item.name,
  //       };
  //     })
  // );
  const onFinish = (values: OrderInput) => {
    const body: OrderInput = {
      name: values.name,
      phone: values.phone,
      address: values.address,
      items: values.items,
      type: "BOOK",
    };
    callback(body, form);
  };
  useEffect(() => {}, [data]);
  return (
    <Drawer
      placement="right"
      visible={visible}
      onClose={() => setVisible(false)}
      width={720}
      extra={
        <Space>
          <Button onClick={() => setVisible(false)}>Close</Button>
        </Space>
      }
      destroyOnClose
    >
      <Form
        name="dynamic_form_nest_item"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item name="name">
          <AutoComplete
            options={names}
            placeholder="name"
            showSearch
            filterOption
          />
        </Form.Item>
        <Form.Item name="phone">
          <AutoComplete options={phones} filterOption placeholder="phone" />
        </Form.Item>
        <Form.Item name="address">
          <AutoComplete
            options={addresses}
            filterOption
            placeholder="address"
          />
        </Form.Item>
        <Form.Item name="type">
          <Select allowClear filterOption showSearch placeholder="Type">
            <Option value="BOOK">Book</Option>
            <Option value="OTHER">Other</Option>
          </Select>
        </Form.Item>
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="center"
                >
                  <Form.Item
                    style={{ minWidth: "10rem" }}
                    {...restField}
                    name={[name, "shipmentItem"]}
                    label="name"
                    rules={[{ required: true, message: "name is missing!" }]}
                  >
                    {/* <AutoComplete options={items} filterOption /> */}
                    <Select allowClear showSearch filterOption>
                      {data?.map((item) => (
                        <Option key={item._id} value={item._id}>
                          {item.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "discount"]}
                    label="discount"
                    initialValue={0}
                    rules={[{ required: true, message: "discount missing" }]}
                  >
                    <InputNumber type={"number"} placeholder="Quantity" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "amount"]}
                    label="quantity"
                    initialValue={1}
                    rules={[{ required: true, message: "quantity missing" }]}
                  >
                    <InputNumber type={"number"} placeholder="Quantity" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Order
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        {errorText && <span style={{ color: "red" }}>{errorText}</span>}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
