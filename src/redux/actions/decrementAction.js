import { DECREMENT } from "../actionTypes";

export const decrementvalue = value => ({
  type: DECREMENT,
  payload: value,
});

export default decrementvalue;
