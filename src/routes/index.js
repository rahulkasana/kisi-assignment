import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../store/kisi";

const Auth = lazy(() => import("./Auth"));
const Global = lazy(() => import("./Global"));

function AppRoutes() {
  const loadingState = () => {
    return <Spin size="large" />;
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialize());
    //eslint-disable-next-line
  }, []);
  const loggedIn = useSelector((state) => state.kisi?.secret);
  return (
    <>
      <Suspense fallback={loadingState()}>
        <BrowserRouter>{!!loggedIn ? <Auth /> : <Global />}</BrowserRouter>
      </Suspense>
    </>
  );
}
export default AppRoutes;
