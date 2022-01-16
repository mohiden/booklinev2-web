import { useEffect, useState } from "react";
import { Layout } from "antd";
import { Header, Sidebar, Content } from "@layout";
import { useNavigate } from "react-router";
import { parseJwt } from "@utils";
import { usePublicStore, useUserStore } from "@stores";
import { Api } from "@api";

export const App = () => {
  //auth validation goes here ....
  const [token] = useState<string | null>(window.localStorage.getItem("token"));
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { setCustomerDetail } = usePublicStore();

  useEffect(() => {
    if (!token) return navigate("/");
    const user = parseJwt(token!);
    setUser(user);

    //setting customers detail into store
    Api.get("static/customers_detail").then((res) => {
      console.log("CUSTOMER", res.data);
      setCustomerDetail(res.data);
    });
  }, [token, navigate, setUser, setCustomerDetail]);

  return (
    //Main layout wrapper
    <Layout>
      {/* Sidebar  */}
      <Sidebar />
      {/* Header and content */}
      <Layout style={{ height: "100vh" }}>
        {/* <Affix> */}
        <Header />
        {/* </Affix> */}
        <Content />
      </Layout>
    </Layout>
  );
};
