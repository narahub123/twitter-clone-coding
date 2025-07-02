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

      console.log(segments);

      let segmentHTML: string = "";

      // 현재 줄이 커서가 위치한 줄인 경우
      if (row === curRow) {
        // 커서가 위치해야 할 segment가 존재하지 않는 경우 (예: 텍스트 삭제로 인해 사라진 경우)
        if (!segments[curCol]) {
          // 이전 segment로 커서를 이동
          const prevSegment = segments[curCol - 1];

          if (prevSegment) {
            // 이전 segment가 존재하는 경우 해당 segment의 끝으로 커서 이동
            caretPos = prevSegment.text.length;
            curCol -= 1;
          } else {
            // 줄에서 segment가 하나도 없는 경우: 커서를 줄의 처음으로 이동
            caretPos = 0;
            curCol = 0;
          }
        } else {
          // 커서 위치가 현재 segment의 텍스트 길이보다 큰 경우, 다음 segment로 이동
          while (
            curCol < segments.length &&
            segments[curCol].text.length < caretPos
          ) {
            // 현재 segment의 길이만큼 커서 위치를 보정
            caretPos -= segments[curCol].text.length;
            curCol += 1;
          }
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
