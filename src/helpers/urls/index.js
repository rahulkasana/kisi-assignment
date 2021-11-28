export const fetchGroupsURL = (limit, offset) => {
  return `/groups?limit=${limit}&offset=${offset}`;
};

export const fetchGroupLocksURL = (groupId, limit, offset) => {
  return `/group_locks?group_id=${groupId}&limit=${limit}&offset=${offset}`;
};

export const fetchLocksURL = (limit, q) => {
  return `/locks/?limit=${limit}&query=${q}`;
};

export const createGroupLockURL = () => {
  return `/group_locks`;
};

export const deleteGroupLockURL = (groupLockId) => {
  return `/group_locks/${groupLockId}`;
};
