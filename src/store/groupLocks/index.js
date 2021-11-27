import { doRequest } from "../../helpers/doRequest";
import { REQUEST_TYPE } from "../../constants";
import { fetchGroupLocksURL } from "../../helpers/urls";

const INITIAL_STATE = { isLoading: false, error: false, total: 2 };

const FETCH_GROUP_LOCKS = "FETCH_GROUP_LOCKS";
const FETCH_GROUP_LOCKS_COMPLETED = "FETCH_GROUP_LOCKS_COMPLETED";
const FETCH_GROUP_LOCKS_FAILED = "FETCH_GROUP_LOCKS_FAILED";

export const fetchGroupLocks = (groupId, limit, offset) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_GROUP_LOCKS });
    let response = await doRequest({
      method: REQUEST_TYPE.GET,
      url: fetchGroupLocksURL(groupId, limit, offset),
    });
    console.log("response --FETCH_GROUPS_COMPLETED--", response);
    const { error } = response;
    if (!!error) {
      dispatch({
        type: FETCH_GROUP_LOCKS_FAILED,
        payload: { error },
      });
    } else {
      dispatch({
        type: FETCH_GROUP_LOCKS_COMPLETED,
        payload: { groups: response },
      });
    }
    return response;
  };
};

const GroupLocksReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    case FETCH_GROUP_LOCKS:
      return { ...INITIAL_STATE, isLoading: true };
    case FETCH_GROUP_LOCKS_COMPLETED:
      return {
        ...state,
        data: payload.groups,
        isLoading: false,
        error: false,
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
