import { Books, Dashboard, Orders, Shipments } from "@sections";
import { Layout } from "antd";
import { Route, Routes } from "react-router";

export const Content = () => {
  return (
    <Layout.Content className="content-layout">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/books" element={<Books />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/shipmentItems" element={<Books />} />
      </Routes>
    </Layout.Content>
  );
};
