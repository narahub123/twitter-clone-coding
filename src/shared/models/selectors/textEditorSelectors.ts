import type { RootState } from "@app";

const selectTextEditorInnerHTML = (state: RootState) =>
  state.textEditor.innerHTML;

const selectTextEditorCaretPosition = (state: RootState) =>
  state.textEditor.caretPosition;

export { selectTextEditorInnerHTML, selectTextEditorCaretPosition };
