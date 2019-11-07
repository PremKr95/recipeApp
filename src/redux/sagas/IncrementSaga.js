import { put, takeLatest } from "redux-saga/effects";
import { INCREMENT, INCREMENT_SUCCESS } from "../actionTypes";

function* incrementOpration(actions) {
  yield put({
    payload: actions.payload + 1,
    type: INCREMENT_SUCCESS,
  });
}

function* incrementSaga() {
  yield takeLatest(INCREMENT, incrementOpration);
}
export default incrementSaga;
