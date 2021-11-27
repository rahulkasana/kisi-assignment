export const REQUEST_TYPE = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
};

export const PATHS = {
  GROUPS: "/groups",
  GROUP_LOCKS: "/groups/:groupId/locks",
  GROUPS_FILTER: "/groups?page=:page&per_page=:per_page",
  LOCKS: "/locks",
};

export const DEFAULT_PAGE_SIZE = 10;

export const MODALS = {
  ASSIGN_LOCKS: "ASSIGN_LOCKS",
  DE_ASSIGN_LOCKS: "DE_ASSIGN_LOCKS",
};
