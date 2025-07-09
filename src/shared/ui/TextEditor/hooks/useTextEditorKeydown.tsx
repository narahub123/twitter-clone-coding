import { useAppDispatch, useAppSelector } from "@shared/lib";
import {
  setTextEditorCaretPosition,
  setTextEditorInnerHTML,
} from "@shared/models";
import {
  selectIsTextEditorDropdownOpen,
  selectTextEditorList,
  selectTextEditorSelectedIndex,
} from "@shared/models/selectors/textEditorSelectors";
import {
  setIsTextEditorDropdownOpen,
  setTextEditorSelectedIndex,
} from "@shared/models/slices/textEditorSlice";
import {
  createEditorHTML,
  extractLines,
  getCaretPosition,
  updateLinesAfterEnter,
  useReplaceTextInTextEditor,
} from "@shared/ui/TextEditor";

const useTextEditorKeyDown = ({
  textEditorRef,
}: {
  textEditorRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const dispatch = useAppDispatch();

  const replaceTextInTextEditor = useReplaceTextInTextEditor({ textEditorRef });

  // 드롭다운 여닫힘 여부
  const isOpen = useAppSelector(selectIsTextEditorDropdownOpen);

  // list
  const list = useAppSelector(selectTextEditorList);

  // 선택된 아이템의 index
  const curIndex = useAppSelector(selectTextEditorSelectedIndex);

  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;

    // 드롭다운이 열려 있는 경우
    if (isOpen) {
      if (key === "ArrowUp") {
        e.preventDefault();

        // selectedIndex 이동
        const prevIndex = curIndex - 1 < 0 ? list.length - 1 : curIndex - 1;
        dispatch(setTextEditorSelectedIndex(prevIndex));
      } else if (key === "ArrowDown") {
        e.preventDefault();

        // selectedIndex 이동
        const nextIndex = curIndex + 1 > list.length - 1 ? 0 : curIndex + 1;
        dispatch(setTextEditorSelectedIndex(nextIndex));
      } else if (key === "Enter") {
        e.preventDefault();

        replaceTextInTextEditor(list[curIndex].text);
      } else if (key === "Escape") {
        e.preventDefault();

        // selectedIndex를 초기화 하기
        dispatch(setTextEditorSelectedIndex(0));
        // 드롭다운 닫기
        dispatch(setIsTextEditorDropdownOpen(false));
      }

      // 드롭다운이 닫힌 경우
    } else if (key === "Enter") {
      console.log("Enter 눌림");
      // 기본 동작 막기
      e.preventDefault();

      const textEditor = e.currentTarget;

      const lines = extractLines(textEditor);

      let { caretPos, row, col } = getCaretPosition();

      const updatedLines = updateLinesAfterEnter(lines, { caretPos, row, col });

      const { innerHTML } = createEditorHTML(updatedLines, {
        caretPos,
        row,
        col,
      });

      console.log(innerHTML);

      console.log("변경된 커서 위치", caretPos, row, col);

      dispatch(setTextEditorInnerHTML(innerHTML));
      dispatch(
        setTextEditorCaretPosition({ caretPos: 0, row: row + 1, col: 0 })
      );
    }
  };

  return handleKeydown;
};

export default useTextEditorKeyDown;
