import { toast } from "react-toastify";
import * as AdminApi from "../../api/AdminRequest";

import {
  GROUPS_GET_ALL_FAIL,
  GROUPS_GET_ALL_REQUEST,
  GROUPS_GET_ALL_SUCCESS,
  STUDENT_GET_ALL_FAIL,
  STUDENT_GET_ALL_REQUEST,
  STUDENT_GET_ALL_SUCCESS,
  TEACHER_GET_ALL_FAIL,
  TEACHER_GET_ALL_REQUEST,
  TEACHER_GET_ALL_SUCCESS,
  TEACHER_POST_ALL_FAIL,
  TEACHER_POST_ALL_REQUEST,
  TEACHER_POST_ALL_SUCCESS,
} from "../Constants/AdminContants";

// GET ALL TEACHERS
export const getAllTeachers = () => async (dispatch) => {
  dispatch({ type: TEACHER_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getTeachers();
    dispatch({ type: TEACHER_GET_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TEACHER_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET ALL STUDENTS

export const getAllStudents = () => async (dispatch) => {
  dispatch({ type: STUDENT_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getStudents();
    dispatch({ type: STUDENT_GET_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STUDENT_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET ALL GROUPS

export const getAllGroups = () => async (dispatch) => {
  dispatch({ type: GROUPS_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getGroups();
    console.log(data);
    dispatch({ type: GROUPS_GET_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GROUPS_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// POST TEACHERS

export const postTeachers =
  (
    name,
    email,
    address,
    surname,
    subject,
    phone_number,
    setVisibleModal,
    setRefresh
  ) =>
  async () => {
    // dispatch({ type: TEACHER_POST_ALL_REQUEST });
    try {
      const { data } = await AdminApi.postTeachers({
        name,
        email,
        address,
        surname,
        subject,
        phone_number,
      });
      // dispatch({ type: TEACHER_POST_ALL_SUCCESS, payload: data });
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setVisibleModal("d-none");
        setRefresh(name);
      }
    } catch (error) {
      // dispatch({
      //   type: TEACHER_POST_ALL_FAIL,
      //   payload:
      //     error.response && error.response.data.message
      //       ? error.response.data.message
      //       : error.message,
      // });
      console.log(error);
    }
  };

// POST GROUPS

export const postGroups =
  (group_name, subject, teacher, setVisibleModal, setRefresh) => async () => {
    // dispatch({ type: TEACHER_POST_ALL_REQUEST });
    try {
      const { data } = await AdminApi.postGroups({
        group_name,
        subject,
        teacher,
        setVisibleModal,
        setRefresh,
      });
      // dispatch({ type: TEACHER_POST_ALL_SUCCESS, payload: data });
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setVisibleModal("d-none");
        setRefresh(group_name);
      }
    } catch (error) {
      // dispatch({
      //   type: TEACHER_POST_ALL_FAIL,
      //   payload:
      //     error.response && error.response.data.message
      //       ? error.response.data.message
      //       : error.message,
      // });
      console.log(error);
    }
  };
