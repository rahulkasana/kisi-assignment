import Kisi from "kisi-client";

export const initializeKisi = () => {
  const kisiClient = new Kisi();
  kisiClient.signIn("rkasana00@gmail.com", "Mf@NLdt$.R6E7@T").then((result) => {
    console.log("result", result);
  });
};

const KisiReducer = (state = {}, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};

export default KisiReducer;
