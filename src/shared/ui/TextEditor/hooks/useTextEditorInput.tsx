// import { useAppDispatch } from "@shared/lib";
import {
  createLine,
  createSegment,
  extractLines,
  extractSegments,
  getCaretPosition,
  type ICaretPosition,
} from "@shared/ui/TextEditor";

interface HandleInputProps {
  e: React.FormEvent<HTMLDivElement>;
  setInnerHTML: React.Dispatch<React.SetStateAction<string>>;
  setCaretPosition: React.Dispatch<React.SetStateAction<ICaretPosition>>;
  isComposing: boolean;
}

const useTextEditorInput = () => {
  //   const dispatch = useAppDispatch();

  const handleInput = ({
    e,
    setInnerHTML,
    setCaretPosition,
    isComposing,
  }: HandleInputProps) => {
    const textEditor = e.currentTarget;

    if (isComposing) return;

    let { caretPos, row: curRow, col: curCol } = getCaretPosition();

    console.log("변경 전 커서의 위치", caretPos, curRow, curCol);

    const lines = extractLines(textEditor);

    let linesHTML: string = "";

    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];

      const segments = extractSegments(line);

      let segmentHTML: string = "";

      // 현재 줄이 커서가 위치한 줄인 경우
      if (row === curRow) {
        // 커서 위치가 현재 segment의 텍스트 길이보다 클 경우
        while (segments[curCol].text.length < caretPos) {
          // 커서 위치에서 현재 텍스트 길이를 빼서 남은 caret 위치를 갱신
          caretPos -= segments[curCol].text.length;
          // 다음 segment로 커서 위치를 이동
          curCol += 1;
        }
      }

      for (let col = 0; col < segments.length; col++) {
        const span = segments[col];

        segmentHTML += createSegment(span, row, col);
      }

      linesHTML += createLine(segmentHTML, row);
    }

    console.log("변경된 커서 위치", caretPos, curRow, curCol);

    setInnerHTML(linesHTML);
    setCaretPosition({ caretPos, row: curRow, col: curCol });
  };

  return handleInput;
};

export default useTextEditorInput;
