// import { useAppDispatch } from "@shared/lib";
import { extractLines, extractSegments } from "@shared/ui/TextEditor";

const useTextEditorInput = () => {
  //   const dispatch = useAppDispatch();

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const textEditor = e.currentTarget;

    console.log(textEditor);

    const lines = extractLines(textEditor);

    console.log(lines);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      const segments = extractSegments(line);

      console.log(segments);
    }
  };

  return handleInput;
};

export default useTextEditorInput;
