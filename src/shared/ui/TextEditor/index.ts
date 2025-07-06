import TextEditorTestPage from "./_test";

import TextEditor from "./components";

import {} from "./components";

import {
  useTextEditorInput,
  useSetTextEditorHTMLWithCaret,
  useTextEditorKeyDown,
  useTextEditorKeyUp,
} from "./hooks";

import {
  extractLines,
  extractInlines,
  extractSegments,
  createSegment,
  createLine,
  getCaretPosition,
  handleCompositionStart,
  handleCompositionEnd,
  isInlineSegment,
  createEditorHTML,
} from "./utils";

import type {
  InlineType,
  IInlineEntity,
  SegmentType,
  ISegment,
  ICaretPosition,
} from "./types";

export default TextEditor;
export {
  // _test
  TextEditorTestPage,

  // components

  // hooks
  useTextEditorInput,
  useSetTextEditorHTMLWithCaret,
  useTextEditorKeyDown,
  useTextEditorKeyUp,

  // utils
  extractLines,
  extractInlines,
  extractSegments,
  createSegment,
  createLine,
  getCaretPosition,
  handleCompositionStart,
  handleCompositionEnd,
  isInlineSegment,
  createEditorHTML,
};

export type {
  InlineType,
  IInlineEntity,
  SegmentType,
  ISegment,
  ICaretPosition,
};
