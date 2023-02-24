import * as AdminApi from "../../api/AdminRequest";

import {
  TEACHER_GET_ALL_FAIL,
  TEACHER_GET_ALL_REQUEST,
  TEACHER_GET_ALL_SUCCESS,
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
