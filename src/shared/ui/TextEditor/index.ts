import TextEditorTestPage from "./_test";

import TextEditor from "./components";

import {} from "./components";

import { useTextEditorInput } from "./hooks";

import {
  extractLines,
  extractInlines,
  extractSegments,
  createSegment,
  createLine,
} from "./utils";

import type { InlineType, IInlineEntity, SegmentType, ISegment } from "./types";

export default TextEditor;
export {
  // _test
  TextEditorTestPage,

  // components

  // hooks
  useTextEditorInput,

  // utils
  extractLines,
  extractInlines,
  extractSegments,
  createSegment,
  createLine,
};

export type { InlineType, IInlineEntity, SegmentType, ISegment };
