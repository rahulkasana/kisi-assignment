import React, { useEffect, useState } from "react";
import { Button, Col, List, Row, Tooltip } from "antd";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  MODALS,
} from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupLocks } from "../../store/groupLocks";
import { useParams } from "react-router-dom";
import "./styles.less";
import { open } from "../../store/modal";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";

const GroupLocks = () => {
  const { groupId } = useParams();
  const [current, setCurrentPage] = useState(DEFAULT_PAGE_NUMBER);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const dispatch = useDispatch();
  const groupLocksData = useSelector((state) => state.groupLocks?.data) || [];
  const isLoading = useSelector((state) => state.groupLocks?.isLoading);
  const total = useSelector((state) => state.groupLocks?.total);
  const modalVisible = useSelector((state) => state.modal.isVisible);
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  const fetchGroupLocksByPagination = (current, pageSize) => {
    const limit = pageSize;
    const offset = (current - 1) * pageSize;
    dispatch(fetchGroupLocks(groupId, limit, offset));
  };
  useEffect(() => {
    if (!modalVisible) {
      fetchGroupLocksByPagination(current, pageSize);
    }
    //eslint-disable-next-line
  }, [current, pageSize, modalVisible]);

  const openAdd = () => {
    dispatch(open(MODALS.ASSIGN_LOCKS, { groupId }));
  };

  const openConfirmModal = (groupLockId) => () => {
    dispatch(open(MODALS.DE_ASSIGN_LOCKS, { groupLockId }));
  };

  return (
    <div className="group-locks-container">
      <Button className="kisi-button light-blue" onClick={openAdd}>
        Assign Lock
      </Button>
      <List
        loading={isLoading}
        itemLayout="vertical"
        size="large"
        pagination={{
          current,
          pageSize,
          total,
          showSizeChanger: true,
          onChange: handlePageChange,
        }}
        dataSource={groupLocksData}
        renderItem={(groupLock) => {
          const { lock: { description = "No Description", name } = {}, id } =
            groupLock;
          return (
            <List.Item key={id}>
              <Row>
                <Col span={20}>
                  <Row style={{ fontWeight: "bold" }}>{name}</Row>
                  <Row>{description ? description : "No Description"}</Row>
                </Col>
                <Col span={4}>
                  <Row gutter={[16]}>
                    <Tooltip title="Delete Lock" color="#6787f0" key={id}>
                      <Col>
                        <DeleteOutlined onClick={openConfirmModal(id)} />
                      </Col>
                    </Tooltip>
                    <Col>
                      <Tooltip
                        title={JSON.stringify(groupLock)}
                        color="#6787f0"
                        key={id}
                      >
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default GroupLocks;
