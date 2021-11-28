import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const Auth = lazy(() => import("./Auth"));
const Global = lazy(() => import("./Global"));

function AppRoutes() {
  const loadingState = () => {
    return <Spin size="large" />;
  };
  const secret = localStorage.getItem("secret");
  const loggedIn = useSelector((state) => state.kisi?.secret);
  return (
    <>
      <Suspense fallback={loadingState()}>
        <BrowserRouter>{secret ? <Auth /> : <Global />}</BrowserRouter>
      </Suspense>
    </>
  );
}
export default AppRoutes;
