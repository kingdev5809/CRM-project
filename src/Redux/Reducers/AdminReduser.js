import {
  GROUPS_GET_ALL_FAIL,
  GROUPS_GET_ALL_REQUEST,
  GROUPS_GET_ALL_SUCCESS,
  GROUPS_GET_ONE_FAIL,
  GROUPS_GET_ONE_REQUEST,
  GROUPS_GET_ONE_SUCCESS,
  GROUPS_TIMES_GET_ONE_FAIL,
  GROUPS_TIMES_GET_ONE_REQUEST,
  GROUPS_TIMES_GET_ONE_SUCCESS,
  LOCATION_GET_ALL_FAIL,
  LOCATION_GET_ALL_REQUEST,
  LOCATION_GET_ALL_SUCCESS,
  STUDENT_GET_ALL_FAIL,
  STUDENT_GET_ALL_REQUEST,
  STUDENT_GET_ALL_SUCCESS,
  SUBJECTS_GET_ALL_FAIL,
  SUBJECTS_GET_ALL_REQUEST,
  SUBJECTS_GET_ALL_SUCCESS,
  TEACHER_GET_ALL_FAIL,
  TEACHER_GET_ALL_REQUEST,
  TEACHER_GET_ALL_SUCCESS,
} from "../Constants/AdminContants";
import { SEND_MESSAGE } from "../Constants/StudentContants";

// GET ALL USERS
export const getAllTeachersReducers = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_GET_ALL_REQUEST:
      return { loading: true };
    case TEACHER_GET_ALL_SUCCESS:
      return { loading: false, Teacherdata: action.payload };
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

// GET ALL Groups
export const getAllGroupReducers = (state = {}, action) => {
  switch (action.type) {
    case GROUPS_GET_ALL_REQUEST:
      return { loading: true };
    case GROUPS_GET_ALL_SUCCESS:
      return { loading: false, data: action.payload };
    case GROUPS_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// GET All Groups Times
export const getAllGroupTimesReducers = (state = {}, action) => {
  switch (action.type) {
    case GROUPS_TIMES_GET_ONE_REQUEST:
      return { loading: true };
    case GROUPS_TIMES_GET_ONE_SUCCESS:
      return { loading: false, data: action.payload };
    case GROUPS_TIMES_GET_ONE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// GET One Groups
export const getOneGroupReducers = (state = {}, action) => {
  switch (action.type) {
    case GROUPS_GET_ONE_REQUEST:
      return { loading: true };
    case GROUPS_GET_ONE_SUCCESS:
      return { loading: false, data: action.payload };
    case GROUPS_GET_ONE_FAIL:
      return { loading: false, error: action.payload };
    case SEND_MESSAGE:
      console.log(state);
      return {
        ...state,
        data: { ...state.data.group.comments, group: action.payload },
      };
    default:
      return state;
  }
};

const initialState = {
  subjectData: [],
};

// GET Subjects
export const getAllSubjectsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUBJECTS_GET_ALL_REQUEST:
      return { loading: true };
    case SUBJECTS_GET_ALL_SUCCESS:
      return { loading: false, subjectData: action.payload };
    case SUBJECTS_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// GET ALL Locations
export const getAllLocationReducers = (state = {}, action) => {
  switch (action.type) {
    case LOCATION_GET_ALL_REQUEST:
      return { loading: true };
    case LOCATION_GET_ALL_SUCCESS:
      return { loading: false, locationData: action.payload };
    case LOCATION_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
