import { combineReducers } from "redux";
import { messages } from "./messages";
import { users } from "./users";

export const reducers = combineReducers({
  messages,
  users
});
