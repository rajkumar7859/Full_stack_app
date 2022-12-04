import { DEC, INC } from "./actionTypes";

const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {
        count: state.count + 1
      };
    }
    case DEC: {
      return {
        count: state.count - 1
      };
    }
    default:
      return state;
  }
};
