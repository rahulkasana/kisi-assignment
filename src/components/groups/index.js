import React, { useEffect } from "react";
import "./styles.less";
import { List } from "antd";
import { useSearchParams } from "react-router-dom";
import RenderGroup from "./renderGroup";
import { fetchGroups } from "../../store/groups";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from "../../constants";

const Groups = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = searchParams.get("page") || DEFAULT_PAGE_NUMBER;
  const pageSize = searchParams.get("per_page") || DEFAULT_PAGE_SIZE;
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups?.data);
  const isLoading = useSelector((state) => state.groups?.isLoading);
  const total = useSelector((state) => state.groups?.total);
  useEffect(() => {
    fetchGroupsByPagination();
    //eslint-disable-next-line
  }, [searchParams]);

  const fetchGroupsByPagination = () => {
    const limit = searchParams.get("per_page") || DEFAULT_PAGE_SIZE;
    const currentPage = searchParams.get("page") || DEFAULT_PAGE_NUMBER;
    const offset = (currentPage - 1) * limit;
    dispatch(fetchGroups(limit, offset));
  };

  const handlePageChange = (page, pageSize) => {
    setSearchParams({ page: page, per_page: pageSize });
  };

  return (
    <div className="groups-container">
      <List
        loading={isLoading}
        itemLayout="vertical"
        size="large"
        pagination={{
          current: Number(current),
          pageSize: Number(pageSize),
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
