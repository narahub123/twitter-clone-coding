import { useAppDispatch } from "@shared/lib";
import {
  setTextEditorCaretPosition,
  setTextEditorInnerHTML,
} from "@shared/models";
import {
  createEditorHTML,
  extractLines,
  getCaretPosition,
} from "@shared/ui/TextEditor";

const useTextEditorKeyUp = () => {
  const dispatch = useAppDispatch();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;

    const lines = extractLines(e.currentTarget);

    const { innerHTML, caretPosition } = createEditorHTML(
      lines,
      getCaretPosition()
    );

    const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (arrowKeys.includes(key)) {
      dispatch(setTextEditorInnerHTML(innerHTML));
      dispatch(setTextEditorCaretPosition(caretPosition));
    }
  };

  return handleKeyUp;
};

export default useTextEditorKeyUp;
