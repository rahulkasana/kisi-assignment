import { doRequest } from "../../helpers/doRequest";
import { REQUEST_TYPE } from "../../constants";
import {
  createGroupLockURL,
  deleteGroupLockURL,
  fetchGroupLocksURL,
} from "../../helpers/urls";

//TODO: TOTAL IN GROUP LOCKS IS FIXED, COZ I CANT FIND, HOW TO GET TOTAL FROM API's
const INITIAL_STATE = { isLoading: false, error: false, total: null };

const FETCH_GROUP_LOCKS = "FETCH_GROUP_LOCKS";
const FETCH_GROUP_LOCKS_COMPLETED = "FETCH_GROUP_LOCKS_COMPLETED";
const FETCH_GROUP_LOCKS_FAILED = "FETCH_GROUP_LOCKS_FAILED";

export const CREATE_GROUP_LOCKS = "CREATE_GROUP_LOCKS";
export const CREATE_GROUP_LOCKS_COMPLETED = "CREATE_GROUP_LOCKS_COMPLETED";
export const CREATE_GROUP_LOCKS_FAILED = "CREATE_GROUP_LOCKS_FAILED";

export const DELETE_GROUP_LOCK = "DELETE_GROUP_LOCK";
export const DELETE_GROUP_LOCK_COMPLETED = "DELETE_GROUP_LOCK_COMPLETED";
export const DELETE_GROUP_LOCK_FAILED = "DELETE_GROUP_LOCK_FAILED";

export const fetchGroupLocks = (groupId, limit, offset) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch({ type: FETCH_GROUP_LOCKS });
      response = await doRequest({
        method: REQUEST_TYPE.GET,
        url: fetchGroupLocksURL(groupId, limit, offset),
      });
      console.log("response --FETCH_GROUPS_COMPLETED--", response);
      const { error, data, total } = response;
      if (!!error) {
        dispatch({
          type: FETCH_GROUP_LOCKS_FAILED,
          payload: { error },
        });
      } else {
        dispatch({
          type: FETCH_GROUP_LOCKS_COMPLETED,
          payload: { groupLocks: data, total: total },
        });
      }
    } catch (err) {
      dispatch({
        type: CREATE_GROUP_LOCKS_FAILED,
        payload: { error: err.message },
      });
    }
    return response;
  };
};

export const createGroupLock = (requestData) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch({ type: CREATE_GROUP_LOCKS });
      response = await doRequest({
        method: REQUEST_TYPE.POST,
        url: createGroupLockURL(),
        data: requestData,
      });
      console.log("response --CREATE_GROUP_LOCKS_COMPLETED--", response);
      const { error, data } = response;
      if (error) {
        dispatch({
          type: CREATE_GROUP_LOCKS_FAILED,
          payload: { error },
        });
      } else {
        dispatch({
          type: CREATE_GROUP_LOCKS_COMPLETED,
          payload: { locks: data },
        });
      }
    } catch (err) {
      dispatch({
        type: CREATE_GROUP_LOCKS_FAILED,
        payload: { error: err.message },
      });
    }
    return response;
  };
};

export const deleteGroupLock = (groupLockId) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch({ type: DELETE_GROUP_LOCK });
      response = await doRequest({
        method: REQUEST_TYPE.DELETE,
        url: deleteGroupLockURL(groupLockId),
      });
      console.log("response --DELETE_GROUP_LOCK--", response);
      const { error, data } = response;
      if (error) {
        dispatch({
          type: DELETE_GROUP_LOCK_FAILED,
          payload: { error },
        });
      } else {
        dispatch({
          type: DELETE_GROUP_LOCK_COMPLETED,
          payload: { locks: data },
        });
      }
    } catch (err) {
      dispatch({
        type: DELETE_GROUP_LOCK_FAILED,
        payload: { error: err.message },
      });
    }
    return response;
  };
};

const GroupLocksReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    case FETCH_GROUP_LOCKS:
      return { ...state, isLoading: true };
    case FETCH_GROUP_LOCKS_COMPLETED:
      return {
        ...state,
        data: payload.groupLocks,
        isLoading: false,
        error: false,
        total: payload.total,
      };
    case FETCH_GROUP_LOCKS_FAILED:
      return {
        ...state,
        data: [],
        isLoading: false,
        error: payload.error,
      };
    default: {
      return state;
    }
  }
};

export default GroupLocksReducer;
