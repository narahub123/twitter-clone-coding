// import { useAppDispatch } from "@shared/lib";
import {
  createSegment,
  extractLines,
  extractSegments,
} from "@shared/ui/TextEditor";

const useTextEditorInput = () => {
  //   const dispatch = useAppDispatch();

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const textEditor = e.currentTarget;

    console.log(textEditor);

    const lines = extractLines(textEditor);

    console.log(lines);

    for (let row = 0; row < lines.length; row++) {
      const line = lines[row];

      const segments = extractSegments(line);

      console.log(segments);

      let segmentHTML: string = "";

      for (let col = 0; col < segments.length; col++) {
        const span = segments[col];

        segmentHTML += createSegment(span, row, col);
      }

      console.log(segmentHTML);
    }
  };

  return handleInput;
};

export default useTextEditorInput;
