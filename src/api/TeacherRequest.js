import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getAllGroups = () => API.get("/teacher/group", config);

export const getAllGroupTimes = () => API.get("/teacher/group_time", config);

export const getOneGroup = (token) => API.get(`/rektor/group/${token}`, config);

export const getHomeworks = (token) =>
  API.get(`/teacher/homework/${token}`, config);

export const getComments = (token) =>
  API.get(`/teacher/comment/${token}`, config);

export const getOneGroupTimes = (token) =>
  API.get(`/teacher/group_time/${token}`, config);

export const postComments = (data) =>
  API.post("/teacher/comment", data, config);

export const postHomeworks = (data) =>
  API.post("/teacher/homework", data, config);

export const postCheckHomeworks = (data) =>
  API.post("/teacher/check_homework", data, config);
