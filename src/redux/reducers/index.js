import { combineReducers } from "redux";
import incrementReducer from "./incrementReducer";
import decrementReducer from "./decrementReducer";


export default combineReducers({
  incrementReducer,
  decrementReducer,
});
