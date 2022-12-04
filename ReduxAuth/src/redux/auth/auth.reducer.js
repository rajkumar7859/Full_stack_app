import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "./auth.actionType";

let token = localStorage.getItem("token");
const initialValue = {
  isAuth: !!token,
  token: token,
  loading: false,
  error: false
};

export const authReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      localStorage.setItem("token", payload);
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
        error: false
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        isAuth: false,
        token: ""
      };
    }
    default:
      return state;
  }
};
