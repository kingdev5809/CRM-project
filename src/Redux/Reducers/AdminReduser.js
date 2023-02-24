import {
    STUDENT_GET_ALL_FAIL,
    STUDENT_GET_ALL_REQUEST,
    STUDENT_GET_ALL_SUCCESS,
    TEACHER_GET_ALL_FAIL,
    TEACHER_GET_ALL_REQUEST,
    TEACHER_GET_ALL_SUCCESS,
  } from "../Constants/AdminContants";
  
  // GET ALL USERS
  export const getAllTeachersReducers = (state = {}, action) => {
    switch (action.type) {
      case TEACHER_GET_ALL_REQUEST:
        return { loading: true };
      case TEACHER_GET_ALL_SUCCESS:
        return { loading: false, data: action.payload };
      case TEACHER_GET_ALL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

    // GET ALL Teachers
    export const getAllStudentsReducers = (state = {}, action) => {
        switch (action.type) {
          case STUDENT_GET_ALL_REQUEST:
            return { loading: true };
          case STUDENT_GET_ALL_SUCCESS:
            return { loading: false, data: action.payload };
          case STUDENT_GET_ALL_FAIL:
            return { loading: false, error: action.payload };
          default:
            return state;
        }
      };
      