import TextEditorTestPage from "./_test";

import TextEditor from "./components";

import { InlineSuggestionDropdown } from "./components";

import {
  useTextEditorInput,
  useSetTextEditorHTMLWithCaret,
  useTextEditorKeyDown,
  useTextEditorKeyUp,
  useTextEditorClick,
  useInlineSuggestionDropdown,
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
  handleFocus,
  handleBlur,
  correctCaretPosition,
  updateLinesAfterEnter,
} from "./utils";

import type {
  InlineType,
  IInlineEntity,
  SegmentType,
  ISegment,
  ICaretPosition,
  IInlineRect,
} from "./types";

export default TextEditor;
export {
  // _test
  TextEditorTestPage,

  // components
  InlineSuggestionDropdown,

  // hooks
  useTextEditorInput,
  useSetTextEditorHTMLWithCaret,
  useTextEditorKeyDown,
  useTextEditorKeyUp,
  useTextEditorClick,
  useInlineSuggestionDropdown,

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
  handleFocus,
  handleBlur,
  correctCaretPosition,
  updateLinesAfterEnter,
};

export type {
  InlineType,
  IInlineEntity,
  SegmentType,
  ISegment,
  ICaretPosition,
  IInlineRect,
};
