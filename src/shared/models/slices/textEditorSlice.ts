import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITextEditor } from "@shared/types";
import type { ICaretPosition } from "@shared/ui/TextEditor";

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
  reducers: {
    setTextEditorInnerHTML: (state, action: PayloadAction<string>) => {
      state.innerHTML = action.payload;
    },
    setTextEditorCaretPosition: (
      state,
      action: PayloadAction<ICaretPosition>
    ) => {
      state.caretPosition = action.payload;
    },
  },
});

export default textEditorSlice.reducer;

export const { setTextEditorInnerHTML, setTextEditorCaretPosition } =
  textEditorSlice.actions;
