import { combineReducers } from "redux";
import {
  getAllTeachersReducers,
  getAllStudentsReducers,
  getAllGroupReducers,
  getOneGroupReducers,
  getAllGroupTimesReducers,
  getAllSubjectsReducers,
  getAllLocationReducers,
} from "./AdminReduser";
import { userLoginReducer } from "./UserReducers";

export const reducers = combineReducers({
  login: userLoginReducer,
  teachers: getAllTeachersReducers,
  students: getAllStudentsReducers,
  groups: getAllGroupReducers,
  oneGroup: getOneGroupReducers,
  groupTimes: getAllGroupTimesReducers,
  subjects: getAllSubjectsReducers,
  locations: getAllLocationReducers
});
