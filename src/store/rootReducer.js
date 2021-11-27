import { combineReducers } from "redux";
import kisi from "./kisi";
import groups from "./groups";
import locks from "./locks";
import groupLocks from "./groupLocks";
import modal from "./modal";

const rootReducer = combineReducers({
  kisi,
  groups,
  locks,
  groupLocks,
  modal,
});

export default rootReducer;
