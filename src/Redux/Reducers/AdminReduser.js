import {
  GROUPS_GET_ALL_CREATED,
  GROUPS_GET_ALL_FAIL,
  GROUPS_GET_ALL_REQUEST,
  GROUPS_GET_ALL_SUCCESS,
  GROUPS_GET_ONE_FAIL,
  GROUPS_GET_ONE_REQUEST,
  GROUPS_GET_ONE_SUCCESS,
  LOCATION_GET_ALL_CREATED,
  LOCATION_GET_ALL_FAIL,
  LOCATION_GET_ALL_REQUEST,
  LOCATION_GET_ALL_SUCCESS,
  STUDENT_GET_ALL_CREATED,
  STUDENT_GET_ALL_FAIL,
  STUDENT_GET_ALL_REQUEST,
  STUDENT_GET_ALL_SUCCESS,
  SUBJECTS_GET_ALL_FAIL,
  SUBJECTS_GET_ALL_REQUEST,
  SUBJECTS_GET_ALL_SUCCESS,
  TEACHER_GET_ALL_CREATED,
  TEACHER_GET_ALL_FAIL,
  TEACHER_GET_ALL_REQUEST,
  TEACHER_GET_ALL_SUCCESS,
  SEND_MESSAGE,
  HOMEWORK_CREATED,
  STUDENT_GET_ALL_DELETED,
  TEACHER_GET_ALL_DELETED,
  GROUPS_GET_ALL_DELETED,
  GROUPS_POST_STUDENT_REMOVED,
  GROUPS_POST_STUDENT_ADD,
  HOMEWORK_GET_ALL_REQUEST,
  HOMEWORK_GET_ALL_SUCCESS,
  HOMEWORK_GET_ALL_FAIL,
  LOCATION_GET_ALL_DELETED,
  MESSAGE_GET_ALL_REQUEST,
  MESSAGE_GET_ALL_SUCCESS,
  MESSAGE_GET_ALL_FAIL,
  MESSAGE_CREATED,
  GROUPS_TIMES_GET_ALL_REQUEST,
  GROUPS_TIMES_GET_ALL_SUCCESS,
  GROUPS_TIMES_GET_ALL_FAIL,
  GROUPS_TIMES_GET_ALL_CREATED,
  GROUPS_TIMES_GET_ALL_DELETE,
  GROUPS_TIMES_GET_ONE_DELETE,
  GROUPS_TIMES_GET_ONE_CREATED,
  GROUPS_TIMES_GET_ONE_FAIL,
  GROUPS_TIMES_GET_ONE_SUCCESS,
  GROUPS_TIMES_GET_ONE_REQUEST,
} from "../Constants/AdminContants";

const initialState = {
  subjectData: [],
  Teacherdata: [],
  studentData: [],
  allGroupData: [],
  oneGroupData: [],
  locationData: [],
  allGroupTimes: [],
  oneGroupTimes: [],
  homeworkData: [],
  messageData: [],
};
// GET ALL teachers
export const getAllTeachersReducers = (state = initialState, action) => {
  switch (action.type) {
    case TEACHER_GET_ALL_REQUEST:
      return { loading: true };
    case TEACHER_GET_ALL_SUCCESS:
      return { loading: false, Teacherdata: action.payload };
    case TEACHER_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    case TEACHER_GET_ALL_CREATED:
      return {
        ...state,
        Teacherdata: [...state.Teacherdata, action.payload],
      };
    case TEACHER_GET_ALL_DELETED:
      return {
        ...state,
        Teacherdata: state.Teacherdata.filter(
          (data) => data._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// GET ALL students
export const getAllStudentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_GET_ALL_REQUEST:
      return { loading: true };
    case STUDENT_GET_ALL_SUCCESS:
      return { loading: false, studentData: action.payload };
    case STUDENT_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    case STUDENT_GET_ALL_CREATED:
      return {
        ...state,
        studentData: [...state.studentData, action.payload],
      };
    case STUDENT_GET_ALL_DELETED:
      return {
        ...state,
        studentData: state.studentData.filter(
          (data) => data._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// GET ALL Groups
export const getAllGroupReducers = (state = initialState, action) => {
  switch (action.type) {
    case GROUPS_GET_ALL_REQUEST:
      return { loading: true };
    case GROUPS_GET_ALL_SUCCESS:
      return { loading: false, allGroupData: action.payload };
    case GROUPS_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    case GROUPS_GET_ALL_CREATED:
      return {
        ...state,
        allGroupData: [...state.allGroupData, action.payload],
      };
    case GROUPS_GET_ALL_DELETED:
      return {
        ...state,
        allGroupData: state.allGroupData.filter(
          (data) => data._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// GET All Groups Times
export const getAllGroupTimesReducers = (state = initialState, action) => {
  switch (action.type) {
    case GROUPS_TIMES_GET_ALL_REQUEST:
      return { loading: true };
    case GROUPS_TIMES_GET_ALL_SUCCESS:
      return { loading: false, allGroupTimes: action.payload };
    case GROUPS_TIMES_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    case GROUPS_TIMES_GET_ALL_CREATED:
      return {
        ...state,
        allGroupTimes: [...state.allGroupTimes, action.payload],
      };
    case GROUPS_TIMES_GET_ALL_DELETE:
      return {
        ...state,
        allGroupTimes: state.allGroupTimes.filter(
          (data) => data._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// GET One Groups Times
export const getOneGroupTimesReducers = (state = initialState, action) => {
  switch (action.type) {
    case GROUPS_TIMES_GET_ONE_REQUEST:
      return { loading: true };
    case GROUPS_TIMES_GET_ONE_SUCCESS:
      return { loading: false, oneGroupTimes: action.payload };
    case GROUPS_TIMES_GET_ONE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// GET One Groups
export const getOneGroupReducers = (state = initialState, action) => {
  switch (action.type) {
    case GROUPS_GET_ONE_REQUEST:
      return { loading: true };
    case GROUPS_GET_ONE_SUCCESS:
      return { loading: false, oneGroupData: action.payload };
    case GROUPS_GET_ONE_FAIL:
      return { loading: false, error: action.payload };
    case SEND_MESSAGE:
      return {
        ...state,
        oneGroupData: {
          ...state.oneGroupData.group.comments,
          group: action.payload,
        },
      };
    case GROUPS_POST_STUDENT_ADD:
      return {
        oneGroupData: [...state.oneGroupData, action.payload],
      };
    case GROUPS_POST_STUDENT_REMOVED:
      return {
        ...state,
        oneGroupData: state.oneGroupData.filter(
          (data) => data.student._id !== action.payload
        ),
      };
    default:
      return state;
  }
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
export const getAllLocationReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_GET_ALL_REQUEST:
      return { loading: true };
    case LOCATION_GET_ALL_SUCCESS:
      return { loading: false, locationData: action.payload };
    case LOCATION_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    case LOCATION_GET_ALL_CREATED:
      return {
        ...state,
        locationData: [...state.locationData, action.payload],
      };
    case LOCATION_GET_ALL_DELETED:
      return {
        ...state,
        locationData: state.locationData.filter(
          (data) => data._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// GET Homework
export const getAllHomeworkReducers = (state = initialState, action) => {
  switch (action.type) {
    case HOMEWORK_GET_ALL_REQUEST:
      return { loading: true };
    case HOMEWORK_GET_ALL_SUCCESS:
      return { loading: false, homeworkData: action.payload };
    case HOMEWORK_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    case HOMEWORK_CREATED:
      return {
        ...state,
        homeworkData: [...state.homeworkData, action.payload],
      };
    default:
      return state;
  }
};

// GET Comments
export const getAllCommentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_GET_ALL_REQUEST:
      return { loading: true };
    case MESSAGE_GET_ALL_SUCCESS:
      return { loading: false, messageData: action.payload };
    case MESSAGE_GET_ALL_FAIL:
      return { loading: false, error: action.payload };
    case MESSAGE_CREATED:
      return {
        ...state,
        messageData: [...state.messageData, action.payload],
      };
    default:
      return state;
  }
};
