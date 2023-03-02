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

export const getOneGroup = (token) =>
  API.get(`/rektor/group/${token}`, config);