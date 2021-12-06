import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Header, Sidebar, Content } from "@layout";
import { useNavigate } from "react-router";

export const App = () => {
  //auth validation goes here ....
  const [auth, setAuth] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      return navigate("/");
    }
  }, []);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sidebar />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
};
