import React from "react";
import { Layout } from "antd";
import "./styles.less";
import { GithubOutlined } from "@ant-design/icons";
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <>
      <Footer>
        <div className="footer-container">
          <div>Hi, there 👋</div>
          <a
            rel="noopener noreferrer"
            href="https://github.com/rahulkasana/kisi-assignment"
            target="_blank"
          >
            <div className="footer-right-box">
              <div>Made by Rahul</div>
              <GithubOutlined style={{ marginLeft: "8px" }} />
            </div>
          </a>
        </div>
      </Footer>
    </>
  );
};
export default AppFooter;
