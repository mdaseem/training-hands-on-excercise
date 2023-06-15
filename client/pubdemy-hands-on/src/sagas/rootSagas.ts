import { all } from "redux-saga/effects";
import coursesSaga from "./courseSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([coursesSaga(), userSaga()]);
}
