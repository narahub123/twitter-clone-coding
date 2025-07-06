import { extractLines, extractInlines, extractSegments } from "./extractUtils";
import { createSegment, createLine, createEditorHTML } from "./elementUtils";
import { getCaretPosition } from "./caretUtils";
import {
  handleCompositionStart,
  handleCompositionEnd,
} from "./compositionUtils";
import { isInlineSegment } from "./elementGuards";

export {
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
