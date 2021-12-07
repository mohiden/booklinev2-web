import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useStore } from "@store";
import { useNavigate } from "react-router";
export const Sidebar = () => {
  const { collapse } = useStore();
  const navigate = useNavigate();
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapse}>
      <div className="logo">
        <img
          style={{
            maxWidth: "100%",
            width: "63px",
          }}
          src="/assets/images/logo.png"
          alt="logo"
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100vh" }}
      >
        <Menu.Item key="1" icon={<UserOutlined />} onClick={() => navigate("")}>
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<VideoCameraOutlined />}
          onClick={() => navigate("order")}
        >
          Orders
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};
