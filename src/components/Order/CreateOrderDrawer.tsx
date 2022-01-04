import { Button, Drawer, Space } from "antd";
import React from "react";
interface CreateOrderDrawerProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateOrderDrawer: React.FC<CreateOrderDrawerProps> = ({
  visible,
  setVisible,
}) => {
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
      <h1>Hello</h1>
    </Drawer>
  );
};
