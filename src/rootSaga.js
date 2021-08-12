import { all } from "redux-saga/effects";
import { watchSetActiveSearchPath } from "./features/Search/SearchSaga";
import { watchfetchCommon } from "./common/commonSaga";
import { watchFetchList } from "./features/listSaga";

export default function* rootSaga() {
  yield all([
    watchSetActiveSearchPath(),
    watchfetchCommon(),
    watchFetchList()
  ]);
}
