import {
  createEditorHTML,
  getCaretPosition,
  type ICaretPosition,
} from "@shared/ui/TextEditor";

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
    const { caretPos, row: curRow, col: curCol } = getCaretPosition();
    const innerHTML = createEditorHTML(e.currentTarget);

    const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (arrowKeys.includes(key)) {
      setInnerHTML(innerHTML);
      setCaretPosition({ caretPos, row: curRow, col: curCol });
    }
  };

  return handleKeyUp;
};

export default useTextEditorKeyUp;
