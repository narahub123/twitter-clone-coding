import { useAppDispatch, useAppSelector } from "@shared/lib";
import {
  selectTextEditorCaretPosition,
  setTextEditorCaretPosition,
  setTextEditorInnerHTML,
} from "@shared/models";
import {
  setIsTextEditorDropdownOpen,
  setTextEditorSelectedIndex,
} from "@shared/models/slices/textEditorSlice";
import {
  createLine,
  createSegment,
  extractLines,
  extractSegments,
} from "@shared/ui/TextEditor";

interface useReplaceTextInTextEditorProps {
  textEditorRef: React.RefObject<HTMLDivElement | null>;
}

const useReplaceTextInTextEditor = ({
  textEditorRef,
}: useReplaceTextInTextEditorProps) => {
  const dispatch = useAppDispatch();

  const caretPosition = useAppSelector(selectTextEditorCaretPosition);

  const replaceTextInTextEditor = (text: string) => {
    let { caretPos, row: curRow, col: curCol } = caretPosition;

    if (!textEditorRef.current) return;

    const lines = extractLines(textEditorRef.current);

    let linesHTML: string = "";

    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];

      const segments = extractSegments(line);

      let segmentsHTML: string = "";

      if (row === curRow) {
        // 커서의 위치 수정
        caretPos = text.length;
      }

      for (let col = 0; col < segments.length; col++) {
        const span =
          row === curRow && col === curCol
            ? { type: segments[curCol].type, text }
            : segments[col];

        segmentsHTML += createSegment(span, row, col);
      }

      linesHTML += createLine(segmentsHTML, row);
    }

    dispatch(setTextEditorInnerHTML(linesHTML));
    dispatch(
      setTextEditorCaretPosition({ caretPos, row: curRow, col: curCol })
    );

    dispatch(setTextEditorSelectedIndex(0));
    dispatch(setIsTextEditorDropdownOpen(false));
  };

  return replaceTextInTextEditor;
};

export default useReplaceTextInTextEditor;
