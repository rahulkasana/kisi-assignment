import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../store/kisi";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";
import "./styles.less";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    const { username, password } = values;
    dispatch(login(username, password))
      .then((result) => {
        setLoading(false);
        const { secret } = result;
        if (secret) {
          navigate(PATHS.GROUPS, { replace: true });
        }
      })
      .catch(() => setLoading(false));
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="login-heading">Sign In to Your Kisi Account</div>
          <Form
            name="login"
            layout="vertical"
            labelCol={{ span: 16 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input className="input-box" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="input-box" />
            </Form.Item>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={24}>
                <Form.Item>
                  <Button
                    className="kisi-button"
                    style={{ width: "100%", marginTop: "24px" }}
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    disabled={loading}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
