import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getTeachers = () => API.get("/rektor/teacher", config);

export const getStudents = () => API.get("/rektor/student", config);

export const getGroups = () => API.get("/rektor/group", config);

export const getGroupStudents = (token) =>
  API.get(`/rektor/group/${token}`, config);

export const getAllGroupTimes = () => API.get("/rektor/group_time", config);

// Post
export const postTeachers = (data) => API.post("/rektor/teacher", data, config);

export const postGroups = (data) => API.post("/rektor/group", data, config);

export const postStudents = (data) => API.post("/rektor/student", data, config);

export const postStudentToGroup = (data) =>
  API.post("/rektor/room", data, config);

export const postGroupTimes = (data) =>
  API.post("/rektor/group_time", data, config);
