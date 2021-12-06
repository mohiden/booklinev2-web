import React from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
export const Header = () => {
  return (
    <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(true ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => {},
      })}
    </Layout.Header>
  );
};
