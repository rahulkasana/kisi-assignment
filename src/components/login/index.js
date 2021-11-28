import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../store/kisi";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";
import './styles.less'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    const { username, password } = values;
    dispatch(login(username, password)).then((result) => {
      const { secret } = result;
      if (secret) {
        navigate(PATHS.GROUPS, { replace: true });
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className='login-container'>
        <Form
          name="login"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{
            username: "rkasana00@gmail.com",
            password: "Mf@NLdt$.R6E7@T",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
