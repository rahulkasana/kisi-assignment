import { combineReducers } from "redux";
import groups from "./groups";
import locks from "./locks";

const rootReducer = combineReducers({
  groups,
  locks,
});

export default rootReducer;
