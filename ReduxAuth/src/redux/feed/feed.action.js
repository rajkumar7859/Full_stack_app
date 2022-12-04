import axios from "axios";
import { Get_Feeds } from "./feed.actionType";

export const getFeeds = () => async (dispatch) => {
  let res = await axios.get("http://localhost:8080/feeds");
  return dispatch({ type: Get_Feeds, payload: res.data });
};
