import { combineReducers } from "redux";
import kisi from "./kisi";
import groups from "./groups";
import locks from "./locks";

const rootReducer = combineReducers({
  kisi,
  groups,
  locks,
});

export default rootReducer;
