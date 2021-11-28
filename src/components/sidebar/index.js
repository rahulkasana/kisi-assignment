import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./styles.less";
import KisiLogo from "../../assets/icons/kisi.svg";
import { Link, useMatch } from "react-router-dom";
import { PATHS } from "../../constants";

const { Sider } = Layout;

const Sidebar = (props) => {
  const [collapsed, toggleCollapsed] = useState(false);
  const isGroups = useMatch(PATHS.GROUPS);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(visible) => {
        toggleCollapsed(visible);
      }}
    >
      <img src={KisiLogo} alt="kisi-logo" className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={[isGroups ? "1" : "2"]}
        mode="inline"
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to={PATHS.GROUPS}>Groups</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LockOutlined />}>
          <Link to={PATHS.LOCKS}>Locks</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
