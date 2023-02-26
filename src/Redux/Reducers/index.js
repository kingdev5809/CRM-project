import { combineReducers } from "redux";
import { getAllTeachersReducers,getAllStudentsReducers, getAllGroupReducers, getOneGroupReducers } from "./AdminReduser";
import { userLoginReducer } from "./UserReducers";

export const reducers = combineReducers({
  login: userLoginReducer,
  teachers: getAllTeachersReducers,
  students: getAllStudentsReducers,
  groups: getAllGroupReducers,
  groupStudents: getOneGroupReducers,
  groupTimes: getOneGroupReducers
});
