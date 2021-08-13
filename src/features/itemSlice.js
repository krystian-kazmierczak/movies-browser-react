import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    itemData: [],
    additionalData: [],
    loading: true,
    error: false,
  },
  reducers: {
    fetchItem: (state) => {
      state.loading = true;
    },
    fetchItemSuccess: (state, { payload: { itemData, additionalData } }) => {
      state.itemData = itemData;
      state.additionalData = additionalData;
      state.loading = false;
      state.error = false;
    },
    fetchItemError: (state) => {
      state.loading = false;
      state.error = true;
    },
    resetState: (state) => {
      state.itemData = [];
      state.additionalData = [];
      state.loading = true;
      state.error = false;
    },
  },
});

export const {
  fetchItem,
  fetchItemError,
  fetchItemSuccess,
  resetState,
} = itemSlice.actions;

export const selectItemData = (state) => state.item.itemData;
export const selectAdditionalData = (state) => state.item.additionalData;
export const selectLoading = (state) => state.item.loading;
export const selectError = (state) => state.item.error;

export default itemSlice.reducer;
