import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import Auth from "./Auth";

//const Auth = lazy(() => import("./Auth"));

function AppRoutes() {
  const loadingState = () => {
    return <Spin size="large" />;
  };
  return (
    <>
      <Suspense fallback={loadingState()}>
        <BrowserRouter>
          <Auth />
          {/*<Routes>*/}
          {/*  <Route path="/" element={<div>2222211</div>} />*/}
          {/*</Routes>*/}
          <div>111</div>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default AppRoutes;
