import React from "react";
import { Link } from "react-router-dom";
import { Col, List, Row, Tooltip } from "antd";
import { LockOutlined, MessageOutlined } from "@ant-design/icons";

const RenderGroup = (group) => {
  const { name = "", description = "No Description", id, locks_count } = group;
  return (
    <List.Item
      key={id}
      extra={
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Link to={`/groups/${id}/locks`}>
              <Tooltip title={locks_count} placement="left">
                <LockOutlined />
              </Tooltip>
            </Link>
          </Col>
          <Col span={12}>
            <MessageOutlined />
          </Col>
        </Row>
      }
    >
      {name}
      {description}
    </List.Item>
  );
};

export default RenderGroup;
