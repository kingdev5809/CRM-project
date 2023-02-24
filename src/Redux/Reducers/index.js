import { combineReducers } from "redux";
import { getAllTeachersReducers,getAllStudentsReducers } from "./AdminReduser";
import { userLoginReducer } from "./UserReducers";

export const reducers = combineReducers({
  login: userLoginReducer,
  teachers: getAllTeachersReducers,
  students: getAllStudentsReducers,
});
