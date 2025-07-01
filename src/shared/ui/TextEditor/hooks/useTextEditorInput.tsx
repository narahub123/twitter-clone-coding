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
}

const useTextEditorInput = () => {
  //   const dispatch = useAppDispatch();

  const handleInput = ({
    e,
    setInnerHTML,
    setCaretPosition,
  }: HandleInputProps) => {
    const textEditor = e.currentTarget;

    const { caretPos, row: curRow, col: curCol } = getCaretPosition();

    const lines = extractLines(textEditor);

    let linesHTML: string = "";

    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];

      const segments = extractSegments(line);

      let segmentHTML: string = "";

      for (let col = 0; col < segments.length; col++) {
        const span = segments[col];

        segmentHTML += createSegment(span, row, col);
      }

      linesHTML += createLine(segmentHTML, row);
    }

    setInnerHTML(linesHTML);
    setCaretPosition({ caretPos, row: curRow, col: curCol });
  };

  return handleInput;
};

export default useTextEditorInput;
