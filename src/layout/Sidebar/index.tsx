import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useCustomStore } from "@stores";
export const Sidebar = () => {
  const { collapse } = useCustomStore();
  const navigate = useNavigate();
  console.log(window.location.pathname.split("/")[2]);
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapse}>
      <div className="logo">
        <img className="header-logo" src="/assets/images/logo.png" alt="logo" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[`${window.location.pathname.split("/")[2]}`]}
        selectable
        style={{ height: "100vh" }}
      >
        <Menu.Item
          key="dashboard"
          icon={<UserOutlined />}
          onClick={() => navigate("")}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="orders"
          icon={<VideoCameraOutlined />}
          onClick={() => navigate("order")}
        >
          Orders
        </Menu.Item>
        <Menu.Item
          key="books"
          icon={<VideoCameraOutlined />}
          onClick={() => navigate("books")}
        >
          Books
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};
