import { call, put, debounce } from "redux-saga/effects";
import { getApiData } from "../../core/App/getApiData";
import store from "../../core/store";
import {
  fetchSearchError,
  fetchSearchSuccess,
  setActiveSearchPath,
} from "./SearchSlice";

function* fetchSearchHandler() {
  const activePath = store.getState().search.activePath;

  try {
    const data = yield call(getApiData, activePath);
    yield put(fetchSearchSuccess(data));
  } catch (error) {
    yield put(fetchSearchError());
  }
}

export function* watchSetActiveSearchPath() {
  yield debounce(400, setActiveSearchPath.type, fetchSearchHandler);
}
