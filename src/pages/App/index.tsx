import { useEffect, useState } from "react";
import { Layout } from "antd";
import { Header, Sidebar, Content } from "@layout";
import { useNavigate } from "react-router";

export const App = () => {
  //auth validation goes here ....
  const [auth] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      return navigate("/");
    }
  }, [auth, navigate]);

  return (
    //Main layout wrapper
    <Layout style={{ height: "100vh" }}>
      {/* Sidebar  */}
      <Sidebar />
      {/* Header and content */}
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  );
};
