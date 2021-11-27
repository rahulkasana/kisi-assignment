import React, { useEffect } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import "./styles.less";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Groups from "../../components/groups";
import Locks from "../../components/locks";
import { PATHS } from "../../constants";
import { useDispatch } from "react-redux";
import { initialize } from "../../store/kisi";
const { Footer, Content } = Layout;

const AuthRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialize());
    //This solution is no longer needed on es-lint-plugin-react-hooks@4.1.0 and above.
    // eslint-disable-next-line
  }, []);
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
