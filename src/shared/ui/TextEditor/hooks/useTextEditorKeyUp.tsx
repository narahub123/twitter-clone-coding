import { getCaretPosition, type ICaretPosition } from "@shared/ui/TextEditor";

interface HandleKeyUpProps {
  e: React.KeyboardEvent<HTMLDivElement>;
  setCaretPosition: React.Dispatch<React.SetStateAction<ICaretPosition>>;
}

const useTextEditorKeyUp = () => {
  const handleKeyUp = ({ e, setCaretPosition }: HandleKeyUpProps) => {
    const key = e.key;
    // onInput에서 업데이트 후 커서의 위치
    const { caretPos, row: curRow, col: curCol } = getCaretPosition();
    console.log(caretPos, curRow, curCol);

    switch (key) {
      case "ArrowLeft":
        console.log("왼쪽");
        setCaretPosition({ caretPos, row: curRow, col: curCol });
        break;
      case "ArrowRight":
        console.log("오른쪽");
        setCaretPosition({ caretPos, row: curRow, col: curCol });
        break;
      case "ArrowUp":
        console.log("위쪽");
        setCaretPosition({ caretPos, row: curRow, col: curCol });
        break;
      case "ArrowDown":
        console.log("아래쪽");
        setCaretPosition({ caretPos, row: curRow, col: curCol });
        break;
    }
  };

  return handleKeyUp;
};

export default useTextEditorKeyUp;
