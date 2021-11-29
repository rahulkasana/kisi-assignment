import React from "react";
import { Link } from "react-router-dom";
import { Col, List, Row, Tooltip } from "antd";
import { LockOutlined, InfoCircleOutlined } from "@ant-design/icons";

const RenderGroup = (group) => {
  const { name = "", description = "", id, locks_count } = group;
  return (
    <List.Item key={id}>
      <Link
        to={`/groups/${id}/locks`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <Row>
          <Col span={20}>
            <Row style={{ fontWeight: "bold" }}>{name}</Row>
            <Row>{description ? description : "No Description"}</Row>
          </Col>
          <Col span={4}>
            <Row gutter={[16]}>
              <Tooltip title="Locks Currently Active" color="#6787f0" key={id}>
                <Col>
                  {locks_count} <LockOutlined style={{ fontSize: 16 }} />
                </Col>
              </Tooltip>
              <Col>
                <Tooltip title={JSON.stringify(group)} color="#6787f0" key={id}>
                  <InfoCircleOutlined />
                </Tooltip>
              </Col>
            </Row>
          </Col>
        </Row>
      </Link>
    </List.Item>
  );
};

export default RenderGroup;
