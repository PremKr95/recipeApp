import { DECREMENT, DECREMENT_SUCCESS, SPLASH_SUCCESS } from "../actionTypes";

const initialState = {
  initialValue: 0,
};

const decrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT:
        console.log("TCL: decrementReducer -> action", action)
      return {
        ...state,
        initialValue: action.payload,
      };
    case DECREMENT_SUCCESS:
        console.log("TCL: decrementReducer -> action", action)
      return {
        ...state,
        initialValue: action.payload,
      };

    default:
      return state;
  }
};

export default decrementReducer;
