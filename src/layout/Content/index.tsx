import { Orders } from "@components";
import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router";

export const Content = () => {
  return (
    <Layout.Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Routes>
        <Route path="/" element={<Orders />} />
      </Routes>
    </Layout.Content>
  );
};
