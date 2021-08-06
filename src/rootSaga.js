import { all } from "redux-saga/effects";
import { watchSetActiveSearchPath } from "./features/Search/SearchSaga";

export default function* rootSaga() {
  yield all([watchSetActiveSearchPath()]);
}
