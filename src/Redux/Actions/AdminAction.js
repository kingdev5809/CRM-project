import { toast } from "react-toastify";
import * as AdminApi from "../../api/AdminRequest";

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

// GET One GROUPS

export const getOneGroup = (token) => async (dispatch) => {
  dispatch({ type: GROUPS_GET_ONE_REQUEST });
  try {
    const { data } = await AdminApi.getGroupStudents(token);

    dispatch({ type: GROUPS_GET_ONE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GROUPS_GET_ONE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



// GET All GROUP Times

export const getAllGroupTimes = () => async (dispatch) => {
  dispatch({ type: GROUPS_TIMES_GET_ONE_REQUEST });
  try {
    const { data } = await AdminApi.getAllGroupTimes();

    dispatch({ type: GROUPS_TIMES_GET_ONE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GROUPS_TIMES_GET_ONE_FAIL,
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
  (
    group_name,
    subject,
    teacher,
    bg_color,
    text_color,
    text,
    setVisibleModal,
    setRefresh
  ) =>
  async () => {
    // dispatch({ type: TEACHER_POST_ALL_REQUEST });
    try {
      const { data } = await AdminApi.postGroups({
        group_name,
        subject,
        teacher,
        bg_color,
        text_color,
        text,
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

// POST Students

export const postStudents =
  (
    name,
    surname,
    email,
    address,
    phone_number,
    person_nr,
    parents_name,
    parents_phone_number,
    setVisibleModal,
    setRefresh
  ) =>
  async () => {
    try {
      const { data } = await AdminApi.postStudents({
        name,
        surname,
        email,
        address,
        phone_number,
        person_nr,
        parents_name,
        parents_phone_number,
      });

      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setVisibleModal("d-none");
        setRefresh(name);
      }
    } catch (error) {
      console.log(error);
    }
  };

// POST Students to group

export const postStudentToGroup =
  (student, group, setVisibleModal, setRefresh) => async () => {
    try {
      const { data } = await AdminApi.postStudentToGroup({
        student,
        group,
      });

      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setVisibleModal("d-none");
        setRefresh(student);
      }
    } catch (error) {
      console.log(error);
    }
  };
