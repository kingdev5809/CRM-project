import * as AdminApi from "../../api/StudentRequest";

// GET ALL GROUPS

import {
  GROUPS_GET_ALL_FAIL,
  GROUPS_GET_ALL_REQUEST,
  GROUPS_GET_ALL_SUCCESS,
  GROUPS_GET_ONE_FAIL,
  GROUPS_GET_ONE_REQUEST,
  GROUPS_GET_ONE_SUCCESS,
} from "../Constants/AdminContants";

// GET All GROUPS

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

export const getOneGroup = (group_id) => async (dispatch) => {
  dispatch({ type: GROUPS_GET_ONE_REQUEST });
  try {
    const { data } = await AdminApi.getOneGroup(group_id);
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

// Send comment

export const putComment = (group_id, message,) => async () => {
  try {
    const { data } = await AdminApi.putComments({
      group_id, message,
    });
console.log(data);
    if (data.error) {
      toast.warning(data.error);
    } else {
      toast.success(data.msg);
      
    }
  } catch (error) {
    console.log(error);
  }
};
