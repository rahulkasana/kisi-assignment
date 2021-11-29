import { doRequest } from "../../helpers/doRequest";
import { REQUEST_TYPE } from "../../constants";
import { fetchLocksURL } from "../../helpers/urls";

const FETCH_LOCKS = "FETCH_LOCKS";
const FETCH_LOCKS_COMPLETED = "FETCH_LOCKS_COMPLETED";
const FETCH_LOCKS_FAILED = "FETCH_LOCKS_FAILED";

export const fetchLocks = (limit, q) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch({ type: FETCH_LOCKS });
      response = await doRequest({
        method: REQUEST_TYPE.GET,
        url: fetchLocksURL(limit, q),
      });
      console.log("response --FETCH_LOCKS_COMPLETED--", response);
      const { error, data } = response;
      if (error) {
        dispatch({
          type: FETCH_LOCKS_FAILED,
          payload: { error },
        });
      } else {
        dispatch({
          type: FETCH_LOCKS_COMPLETED,
          payload: { locks: data },
        });
      }
    } catch (err) {
      dispatch({
        type: FETCH_LOCKS_FAILED,
        payload: { error: err.message },
      });
    }
    return response;
  };
};

const LocksReducer = (state = {}, action = {}) => {
  const { type } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};

export default LocksReducer;
