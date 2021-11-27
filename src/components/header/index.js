import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./styles.less";
import { Layout } from "antd";
const { Header } = Layout;

const AppHeader = (props) => {
  const { collapsed = false, toggleCollapsed } = props;
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div onClick={() => toggleCollapsed(!collapsed)}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Header>
  );
};
export default AppHeader;
