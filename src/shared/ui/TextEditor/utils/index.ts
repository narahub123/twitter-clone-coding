import { extractLines, extractInlines, extractSegments } from "./extractUtils";
import {
  createSegment,
  createLine,
  createEditorHTML,
  updateLinesAfterEnter,
} from "./elementUtils";
import { getCaretPosition, correctCaretPosition } from "./caretUtils";
import {
  handleCompositionStart,
  handleCompositionEnd,
} from "./compositionUtils";
import { isInlineSegment } from "./elementGuards";
import { handleFocus, handleBlur } from "./focusUtils";

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
  handleFocus,
  handleBlur,
  correctCaretPosition,
  updateLinesAfterEnter,
};
