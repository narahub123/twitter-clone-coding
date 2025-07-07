import { createSlice } from "@reduxjs/toolkit";
import type { ITextEditor } from "@shared/types";

const initialState: ITextEditor = {
  innerHTML: "",
  caretPosition: {
    caretPos: 0,
    row: 0,
    col: 0,
  },
};

const textEditorSlice = createSlice({
  name: "textEditor",
  initialState,
  reducers: {},
});

export default textEditorSlice.reducer;

export const {} = textEditorSlice.actions;
