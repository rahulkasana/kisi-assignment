import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Groups from "../../components/groups";
import GroupLocks from "../../components/groupLocks";
import Locks from "../../components/locks";
import NotFound from "../../components/common/notFound";
import AssignLocks from "../../components/modals/assignLocks";
import ConfirmModal from "../../components/modals/confirmDeAssignLock";
import Footer from "../../components/footer";
import { PATHS } from "../../constants";
const { Content } = Layout;

const AuthRoutes = () => {
  return (
    <>
      <Layout className="vh-100">
        <Sidebar />
        <Layout>
          <Header />
          <Content className="site-layout-background">
            <Routes>
              <Route path={"/"} element={<Groups />} />
              <Route path={PATHS.GROUPS} element={<Groups />} />
              <Route path={PATHS.GROUP_LOCKS} element={<GroupLocks />} />
              <Route path={PATHS.LOCKS} element={<Locks />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
          <Footer />
          <AssignLocks />
          <ConfirmModal />
        </Layout>
      </Layout>
    </>
  );
};

export default AuthRoutes;
