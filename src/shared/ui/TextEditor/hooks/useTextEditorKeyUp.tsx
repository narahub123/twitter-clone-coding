import { createEditorHTML, type ICaretPosition } from "@shared/ui/TextEditor";

interface HandleKeyUpProps {
  e: React.KeyboardEvent<HTMLDivElement>;
  setCaretPosition: React.Dispatch<React.SetStateAction<ICaretPosition>>;
  setInnerHTML: React.Dispatch<React.SetStateAction<string>>;
}

const useTextEditorKeyUp = () => {
  const handleKeyUp = ({
    e,
    setCaretPosition,
    setInnerHTML,
  }: HandleKeyUpProps) => {
    const key = e.key;
    const { innerHTML, caretPosition } = createEditorHTML(e.currentTarget);

    const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (arrowKeys.includes(key)) {
      setInnerHTML(innerHTML);
      setCaretPosition(caretPosition);
    }
  };

  return handleKeyUp;
};

export default useTextEditorKeyUp;
