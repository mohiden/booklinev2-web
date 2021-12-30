import React from "react";
import { Dropdown, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useStore } from "@store";
export const Header = () => {
  const { setCollapse } = useStore();
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
            <Menu.Item onClick={() => {}} key={0} icon={<LogoutOutlined />}>
              <a href="javascript(0)">Logout</a>
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
          {"mohiden"} <DownOutlined />
        </a>
      </Dropdown>
    </Layout.Header>
    // </Affix>
  );
};
