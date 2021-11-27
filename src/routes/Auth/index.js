import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import "./styles.less";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Groups from "../../components/groups";
import Locks from "../../components/locks";
import { PATHS } from "../../constants";
const { Footer, Content } = Layout;

const AuthRoutes = () => {
  return (
    <>
      <Layout className="vh-100">
        <Sidebar />
        <Layout>
          <Header />
          <Content className="site-layout-background">
            <Routes>
              <Route path={PATHS.GROUPS} element={<Groups />} />
              <Route path={PATHS.LOCKS} element={<Locks />} />
            </Routes>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default AuthRoutes;
