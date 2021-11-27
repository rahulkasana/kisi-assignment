import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";

const Auth = lazy(() => import("./Auth"));

function AppRoutes() {
  const loadingState = () => {
    return <Spin size="large" />;
  };
  return (
    <>
      <Suspense fallback={loadingState()}>
        <BrowserRouter>
          <Auth />
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default AppRoutes;
