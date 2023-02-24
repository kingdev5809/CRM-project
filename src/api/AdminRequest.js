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
