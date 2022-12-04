import { ADD, DEC, DIV, INC, MUL, RES, SUB } from "./actionTypes";

const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {
        count: state.count + action.payload
      };
    }
    case DEC: {
      return {
        count: state.count - action.payload
      };
    }
    case RES: {
      return {
        count: (state.count = 0)
      };
    }
    case ADD: {
      return {
        count: state.count + action.payload
      };
    }
    case MUL: {
      return {
        count: state.count * action.payload
      };
    }
    case SUB: {
      return {
        count: state.count - action.payload
      };
    }
    case DIV: {
      return {
        count: state.count / action.payload
      };
    }

    default:
      return state;
  }
};
