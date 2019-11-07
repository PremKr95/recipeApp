import { INCREMENT, INCREMENT_SUCCESS } from "../actionTypes";

const initialState = {
  initialValue: 0,
};

const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("TCL: incrementReducer -> action", action)
      return {
        ...state,
        initialValue: action.payload,
      };
    case INCREMENT_SUCCESS:
      return {
        ...state,
        initialValue: action.payload,
      };
    default:
      return state;
  }
};

export default incrementReducer;
