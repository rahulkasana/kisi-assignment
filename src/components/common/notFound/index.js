import React from "react";
import { Result, Button } from "antd";
import { PATHS } from "../../../constants";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(PATHS.GROUPS);
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={navigateToHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
