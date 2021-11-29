import { doRequest } from "../../helpers/doRequest";
import { REQUEST_TYPE } from "../../constants";
import { fetchGroupsURL } from "../../helpers/urls";

const INITIAL_STATE = { isLoading: false, error: false, total: 11 };

const FETCH_GROUPS = "FETCH_GROUPS";
const FETCH_GROUPS_COMPLETED = "FETCH_GROUPS_COMPLETED";
const FETCH_GROUPS_FAILED = "FETCH_GROUPS_FAILED";

export const fetchGroups = (limit, offset) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch({ type: FETCH_GROUPS });
      response = await doRequest({
        method: REQUEST_TYPE.GET,
        url: fetchGroupsURL(limit, offset),
      });
      console.log("response --FETCH_GROUPS_COMPLETED--", response);
      const { error } = response;
      if (error) {
        dispatch({
          type: FETCH_GROUPS_FAILED,
          payload: { error },
        });
      } else {
        dispatch({
          type: FETCH_GROUPS_COMPLETED,
          payload: { groups: response },
        });
      }
    } catch (err) {
      dispatch({
        type: FETCH_GROUPS_FAILED,
        payload: { error: err.message },
      });
    }
    return response;
  };
};

const setGroupsSuccess = (state, payload) => {
  return {
    ...state,
    data: payload.groups,
    isLoading: false,
    error: false,
  };
};

const setGroupsFailure = (state, payload) => {
  return {
    ...state,
    data: [],
    isLoading: false,
    error: payload.error,
  };
};

const GroupsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    case FETCH_GROUPS:
      return { ...INITIAL_STATE, isLoading: true };
    case FETCH_GROUPS_COMPLETED:
      return setGroupsSuccess(state, payload);
    case FETCH_GROUPS_FAILED:
      return setGroupsFailure(state, payload);
    default: {
      return state;
    }
  }
};

export default GroupsReducer;
