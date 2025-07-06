import {
  createEditorHTML,
  extractLines,
  updateLinesAfterEnter,
  type ICaretPosition,
} from "@shared/ui/TextEditor";

interface handleKeyodownProps {
  e: React.KeyboardEvent<HTMLDivElement>;
  setInnerHTML: React.Dispatch<React.SetStateAction<string>>;
  caretPosition: ICaretPosition;
  setCaretPosition: React.Dispatch<React.SetStateAction<ICaretPosition>>;
}

const useTextEditorKeyDown = () => {
  const handleKeydown = ({
    e,
    setInnerHTML,
    caretPosition,
    setCaretPosition,
  }: handleKeyodownProps) => {
    const key = e.key;

    if (key === "Enter") {
      console.log("Enter 눌림");
      // 기본 동작 막기
      e.preventDefault();

      const textEditor = e.currentTarget;

      const lines = extractLines(textEditor);

      let { caretPos, row, col } = caretPosition;

      const updatedLines = updateLinesAfterEnter(lines, { caretPos, row, col });

      const { innerHTML } = createEditorHTML(updatedLines, {
        caretPos,
        row,
        col,
      });

      console.log(innerHTML);

      console.log("변경된 커서 위치", caretPos, row, col);

      setInnerHTML(innerHTML);

      // 커서의 위치 조정
      setCaretPosition({ caretPos: 0, row: row + 1, col: 0 });
    }
  };

  return handleKeydown;
};

export default useTextEditorKeyDown;
