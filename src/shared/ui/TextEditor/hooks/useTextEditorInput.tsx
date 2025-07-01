// import { useAppDispatch } from "@shared/lib";
import {
  createLine,
  createSegment,
  extractLines,
  extractSegments,
} from "@shared/ui/TextEditor";

interface HandleInputProps {
  e: React.FormEvent<HTMLDivElement>;
  setInnerHTML: React.Dispatch<React.SetStateAction<string>>;
}

const useTextEditorInput = () => {
  //   const dispatch = useAppDispatch();

  const handleInput = ({ e, setInnerHTML }: HandleInputProps) => {
    const textEditor = e.currentTarget;

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
  };

  return handleInput;
};

export default useTextEditorInput;
