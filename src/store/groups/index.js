import { doRequest } from "../../helpers/doRequest";
import { REQUEST_TYPE } from "../../constants";
import { fetchGroupsURL } from "../../helpers/urls";

const INITIAL_STATE = {};

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
      dispatch({
        type: FETCH_GROUPS_COMPLETED,
        payload: { ...response },
      });
    } catch (err) {
      dispatch({
        type: FETCH_GROUPS_FAILED,
        payload: { error: err.message },
      });
    }
    return response;
  };
};

const GroupsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};

export default GroupsReducer;
