import {
  GROUPS_GET_ALL_FAIL,
  GROUPS_GET_ALL_REQUEST,
  GROUPS_GET_ALL_SUCCESS,
  GROUPS_GET_ONE_FAIL,
  GROUPS_GET_ONE_REQUEST,
  GROUPS_GET_ONE_SUCCESS,
  GROUPS_TIMES_GET_ALL_FAIL,
  GROUPS_TIMES_GET_ALL_REQUEST,
  GROUPS_TIMES_GET_ALL_SUCCESS,
  GROUPS_TIMES_GET_ONE_FAIL,
  GROUPS_TIMES_GET_ONE_REQUEST,
  GROUPS_TIMES_GET_ONE_SUCCESS,
  HOMEWORK_CREATED,
  HOMEWORK_GET_ALL_FAIL,
  HOMEWORK_GET_ALL_REQUEST,
  HOMEWORK_GET_ALL_SUCCESS,
  MESSAGE_CREATED,
  MESSAGE_GET_ALL_FAIL,
  MESSAGE_GET_ALL_REQUEST,
  MESSAGE_GET_ALL_SUCCESS,
  SEND_MESSAGE,
} from "../Constants/AdminContants";
import * as AdminApi from "../../api/TeacherRequest";
import { toast } from "react-toastify";

// GET ALL GROUPS

export const getAllGroups = () => async (dispatch) => {
  dispatch({ type: GROUPS_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getAllGroups();
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
    const { data } = await AdminApi.getOneGroup(token);
    dispatch({ type: GROUPS_GET_ONE_SUCCESS, payload: data.students });
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
  dispatch({ type: GROUPS_TIMES_GET_ALL_FAIL });
  try {
    const { data } = await AdminApi.getAllGroupTimes();

    dispatch({ type: GROUPS_TIMES_GET_ALL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GROUPS_TIMES_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// GET One group Time

export const getOneGroupTime = (token) => async (dispatch) => {
  dispatch({ type: GROUPS_TIMES_GET_ONE_REQUEST });
  try {
    const { data } = await AdminApi.getOneGroupTimes(token);
    console.log(data);
    dispatch({ type: GROUPS_TIMES_GET_ONE_SUCCESS, payload: data.groupTimes[0] });
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
// GET Homeworks

export const getHomework = (token) => async (dispatch) => {
  dispatch({ type: HOMEWORK_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getHomeworks(token);
    dispatch({ type: HOMEWORK_GET_ALL_SUCCESS, payload: data.homeworks });
  } catch (error) {
    dispatch({
      type: HOMEWORK_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GET Comments

export const getComment = (token) => async (dispatch) => {
  dispatch({ type: MESSAGE_GET_ALL_REQUEST });
  try {
    const { data } = await AdminApi.getComments(token);
    dispatch({ type: MESSAGE_GET_ALL_SUCCESS, payload: data.comments });
  } catch (error) {
    dispatch({
      type: MESSAGE_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// put comment
export const postComment = (group_id, message) => async (dispatch) => {
  try {
    const { data } = await AdminApi.postComments({
      group_id,
      message,
    });
    dispatch({ type: MESSAGE_CREATED, payload: data.result });
    if (data.error) {
      toast.warning(data.error);
    } else {
      toast.success(data.msg);
    }
  } catch (error) {
    console.log(error);
  }
};

// POST Homework

export const postHomework =
  (
    group_id,
    name,
    message,
    setGroup_id,
    setName,
    setMessage,
    setVisibleModal
  ) =>
  async (dispatch) => {
    try {
      const { data } = await AdminApi.postHomeworks({
        group_id,
        name,
        message,
      });
      console.log(data);
      if (data.error) {
        toast.warning(data.error);
      } else {
        setVisibleModal("d-none");
        setGroup_id();
        setName();
        setMessage();
        toast.success(data.msg);

        dispatch({ type: HOMEWORK_CREATED, payload: data.result });
      }
    } catch (error) {
      console.log(error);
    }
  };

// POST check homework

export const postCheckHomework =
  (Rates, setVisibleModal, dataRates, studentsId, setRefresh) =>
  async (dispatch) => {
    try {
      const { data } = await AdminApi.postCheckHomeworks(Rates);
      if (data.error) {
        toast.warning(data.error);
      } else {
        toast.success(data.msg);
        setVisibleModal("d-none");
        dataRates = [];
        studentsId = [];
        setRefresh(Rates);
      }
    } catch (error) {
      console.log(error);
    }
  };
