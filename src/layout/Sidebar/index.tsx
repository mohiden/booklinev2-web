import { Layout, Menu } from "antd";
import {
  UserOutlined,
  BookOutlined,
  OrderedListOutlined,
  StockOutlined,
  MoneyCollectOutlined,
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
        style={{ height: "100%" }}
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
          icon={<OrderedListOutlined />}
          onClick={() => navigate("orders")}
        >
          Orders
        </Menu.Item>
        <Menu.Item
          key="books"
          icon={<BookOutlined />}
          onClick={() => navigate("books")}
        >
          Books
        </Menu.Item>
        <Menu.SubMenu title="Shipment" icon={<MoneyCollectOutlined />}>
          <Menu.Item
            key="shipments"
            icon={<StockOutlined />}
            onClick={() => navigate("shipments")}
          >
            Shipments
          </Menu.Item>
          {/* <Menu.Item
            key="shipmentItems"
            icon={<StockOutlined />}
            onClick={() => navigate("shipmentItems")}
          >
            Items
          </Menu.Item> */}
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
};
