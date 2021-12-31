import { useEffect, useState } from "react";
import { Layout } from "antd";
import { Header, Sidebar, Content } from "@layout";
import { useNavigate } from "react-router";
import { parseJwt } from "@utils";
import { useUserStore } from "@stores";

export const App = () => {
  //auth validation goes here ....
  const [token] = useState<string | null>(window.localStorage.getItem("token"));
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  useEffect(() => {
    if (!token) return navigate("/");
    const user = parseJwt(token!);
    console.log(user);
    setUser(user);
  }, [token, navigate, setUser]);

  return (
    //Main layout wrapper
    <Layout>
      {/* Sidebar  */}
      <Sidebar />
      {/* Header and content */}
      <Layout>
        {/* <Affix> */}
        <Header />
        {/* </Affix> */}
        <Content />
      </Layout>
    </Layout>
  );
};
