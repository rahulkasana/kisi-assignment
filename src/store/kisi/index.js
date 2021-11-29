import Kisi from "kisi-client";
const INITIAL_STATE = {};

const LOGIN = "LOGIN";
const LOGIN_COMPLETED = "LOGIN_COMPLETED";
const LOGIN_FAILED = "LOGIN_FAILED";

const RE_INITIALIZE = "RE_INITIALIZE";
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

export const initialize = () => {
  const secret = localStorage.getItem("secret");
  return async (dispatch) => {
    if (secret) {
      dispatch({
        type: RE_INITIALIZE,
        payload: { secret, authenticationToken: secret },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};

const setUserInfo = (payload) => {
  const { secret, authenticationToken } = payload;
  localStorage.setItem("secret", secret);
  return { secret, authenticationToken };
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
    case RE_INITIALIZE:
      return setUserInfo(payload);
    default: {
      return state;
    }
  }
};

export default KisiReducer;
