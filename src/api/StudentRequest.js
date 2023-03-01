import axios from "axios";
const URL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL: URL });

const config = {
  headers: {
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.token,
  },
};

export const getGroups = () => API.get("/student/group", config);

export const getOneGroup = (group_id) =>
  API.get(`/student/group/${group_id}`, config);

export const getAllGroupTimes = () => API.get("/student/group_time", config);

export const putComments = () => API.put("/student/comment", config);
