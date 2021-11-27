import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import "./styles.less";

import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
const { Footer } = Layout;

const AuthRoutes = () => {
  return (
    <>
      <Layout className="vh-100">
        <Sidebar />
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<div>2222211</div>} />
          </Routes>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default AuthRoutes;
