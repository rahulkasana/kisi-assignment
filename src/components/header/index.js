import React from "react";
import "./styles.less";
import { Layout } from "antd";
const { Header } = Layout;

const AppHeader = (props) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div>Kisi Assignment</div>
    </Header>
  );
};
export default AppHeader;
