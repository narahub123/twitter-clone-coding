import TextEditorTestPage from "./_test";

import TextEditor from "./components";

import {} from "./components";

import { useTextEditorInput, useSetTextEditorHTMLWithCaret } from "./hooks";

import {
  extractLines,
  extractInlines,
  extractSegments,
  createSegment,
  createLine,
  getCaretPosition,
  handleCompositionStart,
  handleCompositionEnd,
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

  // utils
  extractLines,
  extractInlines,
  extractSegments,
  createSegment,
  createLine,
  getCaretPosition,
  handleCompositionStart,
  handleCompositionEnd,
};

export type {
  InlineType,
  IInlineEntity,
  SegmentType,
  ISegment,
  ICaretPosition,
};
