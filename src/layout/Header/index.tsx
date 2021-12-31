import React from "react";
import { Dropdown, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  LogoutOutlined,
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
              <a href="#">Logout</a>
            </Menu.Item>
          </Menu>
        )}
        trigger={["click"]}
      >
        <a
          href="javascript(0)"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          {user?.username} <DownOutlined />
        </a>
      </Dropdown>
    </Layout.Header>
    // </Affix>
  );
};
