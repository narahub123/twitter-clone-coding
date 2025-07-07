// import { useAppDispatch } from "@shared/lib";
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

interface HandleInputProps {
  e: React.FormEvent<HTMLDivElement>;
  isComposing: boolean;
}

const useTextEditorInput = () => {
  const dispatch = useAppDispatch();

  const handleInput = ({ e, isComposing }: HandleInputProps) => {
    const textEditor = e.currentTarget;

    if (isComposing) return;

    const lines = extractLines(textEditor);

    const { innerHTML, caretPosition } = createEditorHTML(
      lines,
      getCaretPosition()
    );

    dispatch(setTextEditorInnerHTML(innerHTML));
    dispatch(setTextEditorCaretPosition(caretPosition));
  };

  return handleInput;
};

export default useTextEditorInput;
