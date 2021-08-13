import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    generateList: [],
    loading: true,
  },
  reducers: {
    fetchCommon: (state) => {
      state.loading = true;
    },
    fetchCommonSuccess: (state, { payload: genres }) => {
      state.generateList = genres.map((genre) => ({
        ...genre,
        enabled: false,
      }));
      state.loading = false;
    },
    fetchCommonError: (state) => {
      state.loading = false;
    },
    switchGenerateEnabled: ({ generateList }, { payload: id }) => {
      const index = generateList.findIndex((genre) => genre.id === id);
      generateList[index].enabled = !generateList[index].enabled;
    },
  },
});

export const {
  fetchCommon,
  fetchCommonSuccess,
  fetchCommonError,
  switchGenerateEnabled,
} = commonSlice.actions;
export const selectGenerateList = (state) => state.common.generateList;
export const selectLoading = (state) => state.common.loading;
export const selectEnabledGenres = (state) =>
  state.common.generateList
    .filter((genre) => genre.enabled && genre.id)
    .map((genre) => genre.id);

export default commonSlice.reducer;
