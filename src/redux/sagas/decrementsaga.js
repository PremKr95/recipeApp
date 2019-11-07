import { put, takeLatest } from "redux-saga/effects";
import { DECREMENT, DECREMENT_SUCCESS } from "../actionTypes";

function* decrementOpration(actions) {
  console.log("TCL: function*decrementOpration -> actions", actions)
  yield put({
    payload: actions.payload - 1,
    type: DECREMENT_SUCCESS,
  });
}

function* decrementSaga() {
  yield takeLatest(DECREMENT, decrementOpration);
}

export default decrementSaga;
