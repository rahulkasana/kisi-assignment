import React, { useEffect, useState } from "react";
import { Button, List } from "antd";
import { DEFAULT_PAGE_SIZE, MODALS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupLocks } from "../../store/groupLocks";
import { useParams } from "react-router-dom";
import "./styles.less";
import { open } from "../../store/modal";

const GroupLocks = () => {
  const { groupId } = useParams();
  console.log("groupId ----", groupId);
  const [current, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const dispatch = useDispatch();
  const groupLocks = useSelector((state) => state.groupLocks?.data);
  const isLoading = useSelector((state) => state.groupLocks?.isLoading);
  const total = useSelector((state) => state.groupLocks?.total);
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
    fetchGroupLocksByPagination(current, pageSize);
    //eslint-disable-next-line
  }, [current, pageSize]);

  const openAdd = () => {
    dispatch(open(MODALS.ASSIGN_LOCKS));
  };

  return (
    <div className="group-locks-container">
      <Button onClick={openAdd}>Add Lock</Button>
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
        dataSource={groupLocks}
        renderItem={(item) => {
          const { lock: { description = "No Description", id, name } = {} } =
            item;
          return (
            <div key={id}>
              <div>{name}</div>
              <div>{description}</div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default GroupLocks;
