import { takeEvery, call, put } from "redux-saga/effects";
import { getApiData } from "../getApiData";
import {
  fetchCommonError,
  fetchCommon,
  fetchCommonSuccess,
} from "./commonSlice";
import { apiKey, apiBase, language } from "./commonValues";

function* fetchGeneralHandler() {
  try {
    const genres = yield call(
      getApiData,
      `${apiBase}genre/movie/list${apiKey}${language}`
    );
    yield put(fetchCommonSuccess(genres));
  } catch (error) {
    yield put(fetchCommonError());
  }
};

export function* watchfetchCommon() {
  yield takeEvery(fetchCommon.type, fetchGeneralHandler);
};
