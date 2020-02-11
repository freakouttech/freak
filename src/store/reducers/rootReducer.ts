import { combineReducers } from "redux";
import { settingsReducer } from "./settings";
import { usersReducer } from "./users";
export default combineReducers({
  settings: settingsReducer,
  user: usersReducer,
});
