import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const Sidebar = (props) => {
  const [collapsed, toggleCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(visible) => {
        toggleCollapsed(visible);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<UploadOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="9" icon={<VideoCameraOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
