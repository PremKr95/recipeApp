import { fork, all } from "redux-saga/effects";
import incrementSaga from "./IncrementSaga";
import decrementSaga from "./decrementsaga";

export default function* rootSaga() {
  yield all([
    fork(incrementSaga),
    fork(decrementSaga),
  ]);
}
