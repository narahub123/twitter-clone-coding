import { createSlice } from "@reduxjs/toolkit";
import type { ILoadingState } from "@shared";

const initialState: ILoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.isLoading = true;
    },
    loadingEnd: (state) => {
      state.isLoading = false;
    },
  },
});

export default loadingSlice.reducer;

export const { loadingStart, loadingEnd } = loadingSlice.actions;
