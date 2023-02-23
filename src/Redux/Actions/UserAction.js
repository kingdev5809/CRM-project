import { toast } from "react-toastify";
import * as AuthApi from "../../api/AuthRequest";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Constants/UserConstants";

// LOGIN
export const login =
  (email, password, checkbox, navigate) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
      const { data } = await AuthApi.login({ email, password });

      if (data.error) {
        toast.warning(data.error);
      } else {
        //   document.location.href = "/";
        toast.success(data.msg);
        navigate("/admin/scheldule");
      }

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      if (checkbox) {
        localStorage.setItem("userInfo", JSON.stringify(data));
      }
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// LOGOUT
export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login";
  toast.error("Be healthy until you see !");
};
