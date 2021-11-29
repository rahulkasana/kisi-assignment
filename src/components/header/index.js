import React, { useEffect, useState } from "react";
import "./styles.less";
import { Layout, Row, Col } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { logout } from "../../store/kisi";
import { useDispatch, useSelector } from "react-redux";
const { Header } = Layout;

const AppHeader = () => {
  const location = useLocation();
  const [heading, setHeading] = useState("Kisi Assignment");
  const secret = useSelector((state) => state.kisi?.secret);
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.includes("locks")) {
      setHeading("Group Locks");
    } else if (pathname.includes("groups")) {
      setHeading("Groups");
    }
  }, [location]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };
  return (
    <Header>
      <Row style={{ height: "100%" }}>
        <Col span={16}>
          <div className="heading">{heading}</div>
        </Col>
        {!!secret && (
          <Col span={8}>
            <div className="logout-container" onClick={handleLogout}>
              <div className="logout-box">
                <div className="heading">LOGOUT</div>
                <LogoutOutlined className="logout-icon" />
              </div>
            </div>
          </Col>
        )}
      </Row>
    </Header>
  );
};
export default AppHeader;
