import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/header";
import Login from "../../components/login";
import Footer from "../../components/footer";
const { Content } = Layout;

const AuthRoutes = () => {
  return (
    <>
      <Layout className="vh-100">
        <Header />
        <Content className="site-layout-background">
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default AuthRoutes;
