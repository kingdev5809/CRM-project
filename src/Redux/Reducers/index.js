import { combineReducers } from "redux";
import { getAllTeachersReducers } from "./AdminReducers";
import { userLoginReducer } from "./UserReducers";

export const reducers = combineReducers({
  login: userLoginReducer,
  teachers: getAllTeachersReducers,
});
