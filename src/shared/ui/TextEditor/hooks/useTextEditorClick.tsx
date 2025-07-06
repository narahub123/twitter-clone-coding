import {
  createEditorHTML,
  extractLines,
  getCaretPosition,
  type ICaretPosition,
} from "@shared/ui/TextEditor";

const useTextEditorClick = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    setInnerHTML: React.Dispatch<React.SetStateAction<string>>,
    setCaretPosition: React.Dispatch<React.SetStateAction<ICaretPosition>>
  ) => {
    const lines = extractLines(e.currentTarget);

    const { innerHTML, caretPosition } = createEditorHTML(
      lines,
      getCaretPosition()
    );

    setInnerHTML(innerHTML);
    setCaretPosition(caretPosition);
  };

  return handleClick;
};

export default useTextEditorClick;
