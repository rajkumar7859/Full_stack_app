import { DEC, INC, RES, ADD, MUL, SUB, DIV } from "./actionTypes";

export const increment = (value = 1) => ({ type: INC, payload: value });
export const decrement = (value = 1) => ({ type: DEC, payload: value });
export const reset = () => ({ type: RES });
export const addition = (value = 1) => ({ type: ADD, payload: value });
export const multiply = (value = 1) => ({ type: MUL, payload: value });
export const subract = (value = 1) => ({ type: SUB, payload: value });
export const divide = (value = 1) => ({ type: DIV, payload: value });
