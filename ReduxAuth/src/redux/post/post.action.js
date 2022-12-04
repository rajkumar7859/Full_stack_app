import axios from "axios";
import { GET_POST } from "./post.actionType";

export const postData = () => async (dispatch) => {
  let res = await axios.get("http://localhost:8080/posts");
  return dispatch({ type: GET_POST, payload: res.data });
};
