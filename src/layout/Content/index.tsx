import { Orders } from "@sections";
import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router";

export const Content = () => {
  return (
    <Layout.Content className="content-layout">
      <Routes>
        <Route path="/order" element={<Orders />} />
      </Routes>
    </Layout.Content>
  );
};
