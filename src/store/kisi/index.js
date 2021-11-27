import Kisi from "kisi-client";
const INITIAL_STATE = {};

const INITIALIZE_KISI = "INITIALIZE_KISI";
const INITIALIZE_KISI_COMPLETED = "INITIALIZE_KISI_COMPLETED";
const INITIALIZE_KISI_FAILED = "INITIALIZE_KISI_FAILED";

export const initialize = () => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch({ type: INITIALIZE_KISI });
      //TODO: Remove this comment and revert payload
      // const kisiClient = new Kisi();
      // response = await kisiClient.signIn(
      //   "rkasana00@gmail.com",
      //   "Mf@NLdt$.R6E7@T"
      // );
      console.log("response --INITIALIZE_KISI_COMPLETED--", response);
      dispatch({
        type: INITIALIZE_KISI_COMPLETED,
        // payload: { ...response },
        payload: {
          secret: "8c262d328e0774f1143f02df03198462",
          authenticationToken: "8c262d328e0774f1143f02df03198462",
          user: {
            email: "rkasana00@gmail.com",
            id: 67757669,
            name: "Rahul Kasana",
          },
        },
      });
      // throw new Error('error');
    } catch (err) {
      dispatch({
        type: INITIALIZE_KISI_FAILED,
        payload: { error: err.message },
      });
    }
    return response;
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
    case INITIALIZE_KISI_COMPLETED:
      return setUserInfo(payload);
    case INITIALIZE_KISI_FAILED:
      return clearUserInfo();
    default: {
      return state;
    }
  }
};

export default KisiReducer;
