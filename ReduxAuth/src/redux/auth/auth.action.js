import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGOUT
} from "./auth.actionType";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    let res = await axios.post("https://reqres.in/api/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const logout = () => ({ type: LOGOUT });
