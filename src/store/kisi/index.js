import Kisi from "kisi-client";
const INITIAL_STATE = {};

const LOGIN = "LOGIN";
const LOGIN_COMPLETED = "LOGIN_COMPLETED";
const LOGIN_FAILED = "LOGIN_FAILED";

const LOGOUT = "LOGOUT";

export const login = (email, password) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch({ type: LOGIN });
      const kisiClient = new Kisi();
      response = await kisiClient.signIn(email, password);
      console.log("response --LOGIN_COMPLETED--", response);
      dispatch({
        type: LOGIN_COMPLETED,
        payload: { ...response },
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAILED,
        payload: { error: err.message },
      });
    }
    return response;
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};

const setUserInfo = (payload) => {
  const { secret, authenticationToken, user } = payload;
  localStorage.setItem("secret", secret);
  return { secret, authenticationToken, user };
};

const clearUserInfo = () => {
  localStorage.clear();
  return INITIAL_STATE;
};

const KisiReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    case LOGIN_COMPLETED:
      return setUserInfo(payload);
    case LOGIN_FAILED:
      return clearUserInfo();
    case LOGOUT:
      return clearUserInfo();
    default: {
      return state;
    }
  }
};

export default KisiReducer;
