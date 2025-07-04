import {
  createLine,
  createSegment,
  extractLines,
  extractSegments,
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

      console.log("텍스트 에디어", textEditor);

      const lines = extractLines(textEditor);
      console.log("줄", lines);

      let { caretPos, row: curRow, col: curCol } = caretPosition;

      // 새 줄을 추가 + 텍스트 변경
      lines.splice(curRow + 1, 0, "");

      console.log(lines);
      
      let linesHTML: string = "";

      for (let row = 0; row < lines.length; row++) {
        const line = lines[row];

        const segments = extractSegments(line);

        console.log(segments);

        let segmentHTML: string = "";

        for (let col = 0; col < segments.length; col++) {
          const span = segments[col];

          segmentHTML += createSegment(span, row, col);
        }

        linesHTML += createLine(segmentHTML, row);
      }

      console.log(linesHTML);

      console.log("변경된 커서 위치", caretPos, curRow, curCol);

      setInnerHTML(linesHTML);

      // 커서의 위치 조정
      setCaretPosition({ caretPos: 0, row: curRow + 1, col: 0 });
    }
  };

  return handleKeydown;
};

export default useTextEditorKeyDown;
