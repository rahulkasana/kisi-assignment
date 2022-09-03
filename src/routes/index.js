import React, { lazy, Suspense, useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../store/kisi";

const Auth = lazy(() => import("./Auth"));
const Global = lazy(() => import("./Global"));

function AppRoutes() {
  const loadingState = () => {
    return <div className='vh-100 vw-100 center'><Spin size="large" /></div>;
  };
  const dispatch = useDispatch();
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("secret"));
  useEffect(() => {
    dispatch(initialize());
    //This solution is no longer needed on es-lint-plugin-react-hooks@4.1.0 and above.
    //eslint-disable-next-line
  }, []);

  const secret = useSelector((state) => state.kisi?.secret);
  useEffect(() => {
    if (secret) {
      setLoggedIn(secret);
    } else {
      setLoggedIn(null);
    }
  }, [secret]);

  return (
    <>
      <Suspense fallback={loadingState()}>
        <BrowserRouter>{!!isLoggedIn ? <Auth /> : <Global />}</BrowserRouter>
      </Suspense>
    </>
  );
}
export default AppRoutes;
