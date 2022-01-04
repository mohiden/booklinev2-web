import React from "react";
import { Button, Dropdown, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useCustomStore, useUserStore } from "@stores";
export const Header = () => {
  const { user, logout } = useUserStore();
  const { setCollapse } = useCustomStore();
  return (
    // <Affix>
    <Layout.Header className="header-layout">
      {React.createElement(true ? MenuUnfoldOutlined : MenuFoldOutlined, {
        style: { color: "white", fontSize: "1.5rem", marginRight: "auto" },
        className: "trigger",
        onClick: setCollapse,
      })}
      <Dropdown
        overlay={() => (
          <Menu>
            <Menu.Item onClick={logout} key={0} icon={<LogoutOutlined />}>
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        )}
        trigger={["click"]}
      >
        <Button className="ant-dropdown-link" type="link">
          <UserOutlined />
          {user?.username} <DownOutlined />
        </Button>
      </Dropdown>
    </Layout.Header>
    // </Affix>
  );
};
