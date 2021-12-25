import { useEffect, useState } from "react";
import { Affix, Layout } from "antd";
import { Header, Sidebar, Content } from "@layout";
import { useNavigate } from "react-router";
import { useStore } from "@store";
import { parseJwt } from "@utils";

export const App = () => {
  //auth validation goes here ....
  const [token] = useState<string | null>(window.localStorage.getItem("token"));
  const navigate = useNavigate();
  const { setUser } = useStore();

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
    setUser(parseJwt(token));
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
