import { Get_Feeds } from "./feed.actionType";

const initialValue = {
  feeds: []
};

export const feedReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case Get_Feeds: {
      return {
        ...state,
        feeds: payload
      };
    }
    default:
      return state;
  }
};
