import { Layout, Menu } from "antd";
import Proptypes from "prop-types"
import {
  UserOutlined,
  LaptopOutlined,
  RollbackOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider, Header, Content } = Layout;

const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.role : null;
};

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const userRole = getUserRole();

  const menuItems = [
    // {
    //   key: "1",
    //   icon: <DashboardOutlined />,
    //   label: "Dashboard",
    //   path: "/admin",
    //   onClick: () => {
    //     navigate(`/admin`);
    //   },
    // },
    {
      key: "1",
      icon: <AppstoreOutlined />,
      label: "Kategoriler",
      path: "/",
      children: [
        {
          key: "2",
          label: "Kategori Listesi",
          path: "/admin/categories",
          onClick: () => {
            navigate(`/admin/categories`);
          },
        },
        {
          key: "3",
          label: "Yeni Kategori Oluştur",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
      ],
    },
    {
      key: "4",
      icon: <LaptopOutlined />,
      label: "Ürünler",
      path: "/",
      children: [
        {
          key: "5",
          label: "Ürün Listesi",
          path: "/admin/products",
          onClick: () => {
            navigate(`/admin/products`);
          },
        },
        {
          key: "6",
          label: "Yeni Ürün Oluştur",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
      ],
    },
    {
      key: "7",
      icon: <UserOutlined />,
      label: "Admin Listesi",
      path: "/admin",
      onClick: () => {
        navigate(`/admin`);
      },
    },
    {
      key: "8",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => {
        window.location.href = "/";
      },
    },
  ];
  const getActiveKey = () => {
    for (const item of menuItems) {
      if (item.children) {
        for (const child of item.children) {
          if (child.path === window.location.pathname) {
            return child.key;
          }
        }
      } else {
        if (item.path === window.location.pathname) {
          return item.key;
        }
      }
    }
  };

  const getPageTitle = () => {
    for (const item of menuItems) {
      if (item.children) {
        for (const child of item.children) {
          if (child.path === window.location.pathname) {
            return child.label;
          }
        }
      } else {
        if (item.path === window.location.pathname) {
          return item.label;
        }
      }
    }
  };

if (userRole === "admin") {
  return (
    <div className="admin-layout">

      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider width={200} theme="dark">
          <Menu
            mode="vertical"
            style={{
              height: "100%",
            }}
            items={menuItems}
            defaultSelectedKeys={[getActiveKey()]}
          />
        </Sider>
        <Layout>
          <Header>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
              }}
            >
              <h2>{getPageTitle()}</h2>
              <h2>Admin Paneli</h2>
            </div>
          </Header>
          <Content>
            <div
              className="site-layout-background"
              style={{
                padding: "24px 50px",
                minHeight: 360,
              }}
            >
              {children}

            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
} else {
  return (window.location.href = "/");
}

  
  };

  
  export default AdminLayout;
  
  AdminLayout.propTypes = {
    children: Proptypes.node,
  };