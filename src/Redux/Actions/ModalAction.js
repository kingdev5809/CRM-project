import {
  TEACHERS_FETCHED,
  TEACHER_FETCHING,
  TEACHER_FETCHING_ERROR,
} from "../Constants/UserConstants";
import * as AdminApi from "../../api/AdminRequest";

export const teacher =
  (name, surname ,email ,phone_number,address,photo) => async (dispatch) => {
    dispatch({ type: TEACHER_FETCHING });
    try {
      const { data } = await AdminApi.rektor({
        name, surname ,email ,phone_number,address,photo
      });
      dispatch({ type: TEACHERS_FETCHED, payload: data.teachers });
      localStorage.setItem("teachers", JSON.stringify(data.teachers));
    } catch (error) {
      dispatch({
        type: TEACHER_FETCHING_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

