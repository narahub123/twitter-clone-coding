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

const useTextEditorClick = () => {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const lines = extractLines(e.currentTarget);

    const { innerHTML, caretPosition } = createEditorHTML(
      lines,
      getCaretPosition()
    );

    dispatch(setTextEditorInnerHTML(innerHTML));
    dispatch(setTextEditorCaretPosition(caretPosition));
  };

  return handleClick;
};

export default useTextEditorClick;
