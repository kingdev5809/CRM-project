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

export const getSubjects = () => API.get("/rektor/book", config);

export const getLocations = () => API.get("/rektor/location", config);

// Post
export const postTeachers = (data) => API.post("/rektor/teacher", data, config);

export const postGroups = (data) => API.post("/rektor/group", data, config);

export const postStudents = (data) => API.post("/rektor/student", data, config);

export const postStudentToGroup = (data) =>
  API.post("/rektor/room", data, config);

export const postGroupTimes = (data) =>
  API.post("/rektor/group_time", data, config);

export const postLocations = (data) =>
  API.post("/rektor/location", data, config);

export const deleteStudents = (student_id) =>
  API.delete(`/rektor/student/${student_id}`, config);

export const deleteTeachers = (teacher_id) =>
  API.delete(`/rektor/teacher/${teacher_id}`, config);

export const deleteClasses = (classes_id) =>
  API.delete(`/rektor/group/${classes_id}`, config);

export const removeStudents = (data) =>
  API.delete(
    `/rektor/room?group=${data.group}&student=${data.student}`,
    config
  );

export const deleteLocations = (location_id) =>
  API.delete(`/rektor/location/${location_id}`, config);

export const deleteGroupTimes = (id) =>
  API.delete(`/rektor/group_time/${id}`, config);

export const updateTeachers = (data, teacher_id) =>
  API.put(`/rektor/teacher/${teacher_id}`, data, config);

export const updateStudents = (data, student_id) =>
  API.put(`/rektor/student/${student_id}`, data, config);

export const updateClasses = (data, group_id) =>
  API.put(`/rektor/group/${group_id}`, data, config);

export const updateGroupTimes = (dataTime, id) =>
  API.put(`/rektor/group_time/${id}`, dataTime, config);
