import React from "react";
import { Affix, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useStore } from "@store";
export const Header = () => {
  const setCollapse = useStore((state) => state.setCollapse);
  return (
    // <Affix>
    <Layout.Header
      className="site-layout-background"
      style={{
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {React.createElement(true ? MenuUnfoldOutlined : MenuFoldOutlined, {
        style: { color: "white", fontSize: "1.5rem" },
        className: "trigger",
        onClick: setCollapse,
      })}
      {/* <Menu mode="horizontal" title="FUCKER">
        <Menu.SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.SubMenu>
      </Menu> */}
    </Layout.Header>
    // </Affix>
  );
};
