// import { useAppDispatch } from "@shared/lib";
import {
  createEditorHTML,
  extractLines,
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

    const lines = extractLines(textEditor);

    const { innerHTML, caretPosition } = createEditorHTML(
      lines,
      getCaretPosition()
    );

    setInnerHTML(innerHTML);
    setCaretPosition(caretPosition);
  };

  return handleInput;
};

export default useTextEditorInput;
