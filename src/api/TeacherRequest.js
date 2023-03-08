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

export const putComments = (data) => API.put("/teacher/comment", data, config);

export const postHomeworks = (data) =>
  API.post("/teacher/homework", data, config);
