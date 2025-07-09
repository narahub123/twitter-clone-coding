import type { RootState } from "@app";

const selectTextEditorInnerHTML = (state: RootState) =>
  state.textEditor.innerHTML;

const selectTextEditorCaretPosition = (state: RootState) =>
  state.textEditor.caretPosition;

const selectIsTextEditorDropdownOpen = (state: RootState) =>
  state.textEditor.isOpen;

const selectTextEditorSelectedIndex = (state: RootState) =>
  state.textEditor.selectedIndex;

const selectTextEditorList = (state: RootState) => state.textEditor.list;

export {
  selectTextEditorInnerHTML,
  selectTextEditorCaretPosition,
  selectIsTextEditorDropdownOpen,
  selectTextEditorSelectedIndex,
  selectTextEditorList,
};
