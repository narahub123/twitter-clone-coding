import textEditorSlice from "./textEditorSlice";
import loadingSlice from "./loadingSlice";

import {
  setTextEditorInnerHTML,
  setTextEditorCaretPosition,
} from "./textEditorSlice";

import { loadingStart, loadingEnd } from "./loadingSlice";

export {
  // slice
  textEditorSlice,
  loadingSlice,

  // reducers
  setTextEditorInnerHTML,
  setTextEditorCaretPosition,
  loadingStart,
  loadingEnd,
};
