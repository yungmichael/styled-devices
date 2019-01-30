import { slideReducer } from "./slide";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  slideState: slideReducer
});
