import { call, takeLatest, select, put, delay } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import { fetchList, fetchListError, fetchListSuccess } from "./listSlice";
import { apiKey, apiBase, language } from "./../common/commonValues";
import { selectEnabledGenres } from "../common/commonSlice";

function* fetchListHandler({ payload: { page, urlQuery, type } }) {
  const enabledGenerate = yield select(selectEnabledGenres);

  const activePath =
    type === "movies"
      ? urlQuery
        ? `${apiBase}search/movie${apiKey}${language}&query=${urlQuery}&page=${page}`
        : `${apiBase}discover/movie${apiKey}${language}&sort_by=popularity.desc&page=${page}&with_genres=${enabledGenerate}`
      : urlQuery
      ? `${apiBase}search/person${apiKey}${language}&query=${urlQuery}&page=${page}`
      : `${apiBase}person/popular${apiKey}${language}&page=${page}`;

  try {
    yield delay(1000);
    const data = yield call(getApiData, activePath);
    yield put(fetchListSuccess(data));
  } catch (error) {
    yield put(fetchListError());
  }
}

export function* watchFetchList() {
  yield takeLatest(fetchList.type, fetchListHandler);
}
