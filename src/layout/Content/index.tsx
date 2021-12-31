import { Books, Orders } from "@sections";
import { Layout } from "antd";
import { Route, Routes } from "react-router";

export const Content = () => {
  return (
    <Layout.Content className="content-layout">
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/books" element={<Books />} />
        {/* <Route path="/shipments" element={<Books />} /> */}
      </Routes>
    </Layout.Content>
  );
};
