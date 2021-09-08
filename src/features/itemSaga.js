import { all, call, takeLatest, put, delay } from "redux-saga/effects";
import { getApiData } from "../core/App/getApiData";
import { apiKey, apiBase, language } from "./../common/commonValues";
import { fetchItem, fetchItemSuccess, fetchItemError } from "./itemSlice";

function* fetchItemHandler({ payload: { id, type } }) {
  const activeItemPath =
    type === "movie"
      ? `${apiBase}movie/${id}?api_key=${apiKey}${language}`
      : `${apiBase}person/${id}?api_key=${apiKey}${language}`;

  const activeAdditionalPath =
    type === "movie"
      ? `${apiBase}movie/${id}/credits?api_key=${apiKey}${language}`
      : `${apiBase}person/${id}/movie_credits?api_key=${apiKey}${language}`;

  try {
    yield delay(1000);
    const [itemData, additionalData] = yield all([
      call(getApiData, activeItemPath),
      call(getApiData, activeAdditionalPath),
    ]);
    yield put(fetchItemSuccess({ itemData, additionalData }));
  } catch (error) {
    yield put(fetchItemError());
  }
}

export function* watchFetchItem() {
  yield takeLatest(fetchItem.type, fetchItemHandler);
}
