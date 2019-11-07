import { INCREMENT } from "../actionTypes";

export const incrementvalue = value => ({
  type: INCREMENT,
  payload: value,
});


export default incrementvalue;
