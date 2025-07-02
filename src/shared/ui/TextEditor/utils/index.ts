import { extractLines, extractInlines, extractSegments } from "./extractUtils";
import { createSegment, createLine } from "./elementUtils";
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
};
