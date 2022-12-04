import { GET_POST } from "./post.actionType";

const initialValue = {
  posts: []
};

export const postReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_POST: {
      return {
        ...state,
        posts: payload
      };
    }
    default:
      return state;
  }
};

// eve.holt@reqres.in
