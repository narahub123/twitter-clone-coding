import { createSlice } from "@reduxjs/toolkit";
import type { IModalState } from "@shared/ui/Modal";

const initialState: IModalState = {};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
});

export default modalSlice.reducer;

export const {} = modalSlice.actions;
