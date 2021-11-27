import React, { useState } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
const { Footer } = Layout;

const AuthRoutes = () => {
  const [collapsed, toggleCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Layout className="site-layout">
          <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

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
