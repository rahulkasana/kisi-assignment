import React, { useEffect, useState } from "react";
import "./styles.less";
import { List } from "antd";
import RenderGroup from "./renderGroup";
import { fetchGroups } from "../../store/groups";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_PAGE_SIZE } from "../../constants";
// import { useLocation } from "react-router-dom";

const Groups = () => {
  // let location = useLocation();
  // console.log("location ----", location);
  // const { search } = location;
  const [current, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups?.data);
  const isLoading = useSelector((state) => state.groups?.isLoading);
  const total = useSelector((state) => state.groups?.total);
  useEffect(() => {
    fetchGroupsByPagination(current, pageSize);
    // eslint-disable-next-line
  }, [current, pageSize]);
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(search);
  //   let page = 0;
  //   let size = 10;
  //   for (const [key, value] of urlParams.entries()) {
  //     if (key === "page") {
  //       page = value;
  //     } else {
  //       size = value;
  //     }
  //   }
  // }, []);

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
    <div className="groups-container">
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
        renderItem={RenderGroup}
      />
    </div>
  );
};

export default Groups;
