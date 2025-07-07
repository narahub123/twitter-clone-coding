import { useAppDispatch } from "@shared/lib";
import {
  setTextEditorCaretPosition,
  setTextEditorInnerHTML,
} from "@shared/models";
import {
  createEditorHTML,
  extractLines,
  getCaretPosition,
  updateLinesAfterEnter,
} from "@shared/ui/TextEditor";

const useTextEditorKeyDown = () => {
  const dispatch = useAppDispatch();

  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;

    if (key === "Enter") {
      console.log("Enter 눌림");
      // 기본 동작 막기
      e.preventDefault();

      const textEditor = e.currentTarget;

      const lines = extractLines(textEditor);

      let { caretPos, row, col } = getCaretPosition();

      const updatedLines = updateLinesAfterEnter(lines, { caretPos, row, col });

      const { innerHTML } = createEditorHTML(updatedLines, {
        caretPos,
        row,
        col,
      });

      console.log(innerHTML);

      console.log("변경된 커서 위치", caretPos, row, col);

      dispatch(setTextEditorInnerHTML(innerHTML));
      dispatch(
        setTextEditorCaretPosition({ caretPos: 0, row: row + 1, col: 0 })
      );
    }
  };

  return handleKeydown;
};

export default useTextEditorKeyDown;
