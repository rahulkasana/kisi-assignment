import React, { useEffect, useState } from "react";
import "./styles.less";
import { fetchGroups } from "../../store/groups";
import { useDispatch, useSelector } from "react-redux";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const renderGroup = (group) => {
  console.log("-------- 111111324 --------");
  const { name = "", description = "" } = group;
  return (
    <List.Item
      key={name}
      actions={[
        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText
          icon={MessageOutlined}
          text="2"
          key="list-vertical-message"
        />,
      ]}
    >
      {name}
    </List.Item>
  );
};

const Groups = () => {
  const [current, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups?.data);
  const isLoading = useSelector((state) => state.groups?.isLoading);
  const total = useSelector((state) => state.groups?.total);
  useEffect(() => {
    fetchGroupsByPagination(current, pageSize);
  }, [current, pageSize]);

  const fetchGroupsByPagination = (current, pageSize) => {
    const limit = pageSize;
    const offset = (current - 1) * pageSize;
    dispatch(fetchGroups(limit, offset));
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <>
      <div>Groups</div>
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
        dataSource={groups}
        renderItem={renderGroup}
      />
    </>
  );
};

export default Groups;
