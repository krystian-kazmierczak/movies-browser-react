import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import searchReducer from "./features/Search/SearchSlice";
import listReducer from "./features/listSlice";
import commonReducer from "./common/commonSlice";
import itemReducer from "./features/itemSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    search: searchReducer,
    list: listReducer,
    item: itemReducer,
    common: commonReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
