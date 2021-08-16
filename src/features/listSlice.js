import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
    loading: true,
    numberOfPages: undefined,
    error: false,
    totalResults: undefined,
  },
  reducers: {
    fetchList: (state) => {
      state.loading = true;
    },
    fetchListSuccess: (state, { payload: list }) => {
      state.list = list.results;
      state.loading = false;
      state.error = false;
      state.totalResults = list.total_results;
      state.numberOfPages = list.total_pages;
    },
    fetchListError: (state) => {
      state.loading = false;
      state.error = true;
    },
    resetState: (state) => {
      state.list = [];
      state.loading = true;
      state.error = false;
      state.numberOfPages = undefined;
      state.totalResults = undefined;
    },
  },
});

export const {
  fetchList,
  fetchListError,
  fetchListSuccess,
  resetState,
} = listSlice.actions;

export const selectList = (state) => state.list.list;
export const selectLoading = (state) => state.list.loading;
export const selectError = (state) => state.list.error;
export const selectNumberOfPages = (state) => state.list.numberOfPages;
export const selectTotalResults = (state) => state.list.totalResults;

export default listSlice.reducer;
