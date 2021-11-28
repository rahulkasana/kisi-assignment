import React, { useEffect } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import "./styles.less";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Groups from "../../components/groups";
import GroupLocks from "../../components/groupLocks";
import Locks from "../../components/locks";
import AssignLocks from "../../components/modals/assignLocks";
import { PATHS } from "../../constants";
import { useDispatch } from "react-redux";
import { initialize } from "../../store/kisi";
import ConfirmModal from "../../components/modals/confirmDeAssignLock";
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
              <Route path={PATHS.GROUP_LOCKS} element={<GroupLocks />} />
              <Route path={PATHS.LOCKS} element={<Locks />} />
            </Routes>
          </Content>
          <Footer>footer</Footer>
          <AssignLocks />
          <ConfirmModal />
        </Layout>
      </Layout>
    </>
  );
};

export default AuthRoutes;
