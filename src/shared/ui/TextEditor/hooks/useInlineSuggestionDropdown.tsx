import { useAppDispatch, useAppSelector } from "@shared/lib";
import {
  loadingEnd,
  loadingStart,
  selectTextEditorCaretPosition,
} from "@shared/models";
import {
  setIsTextEditorDropdownOpen,
  setTextEditorList,
} from "@shared/models/slices/textEditorSlice";
import { isInlineSegment, type IInlineRect } from "@shared/ui/TextEditor";
import { useEffect } from "react";

interface useInlineSuggestionDropdownProps {
  textEditorRef: React.RefObject<HTMLDivElement | null>;
  setRect: React.Dispatch<React.SetStateAction<IInlineRect | undefined>>;
}

const list = [
  {
    text: "2 dfkjkdjf",
  },
  {
    text: "1 dfkjkdjf",
  },
  {
    text: "3 dfkjkdjf",
  },
];

const useInlineSuggestionDropdown = ({
  textEditorRef,
  setRect,
}: useInlineSuggestionDropdownProps) => {
  const dispatch = useAppDispatch();

  const fetchList = async (text: string) => {
    dispatch(loadingStart());

    // const res = await fetch("https://www.naver.com");

    dispatch(setTextEditorList(list));

    setTimeout(() => {
      dispatch(loadingEnd());
    }, 3000);
  };

  const caretPosition = useAppSelector(selectTextEditorCaretPosition);
  useEffect(() => {
    if (!textEditorRef.current) return;

    const { row, col } = caretPosition;
    const textEditor = textEditorRef.current;

    const line = textEditor.children[row];

    const curSegment = line?.children[col] as HTMLElement | null;

    if (!curSegment) return;

    if (isInlineSegment(curSegment)) {
      const { top, left, height } = curSegment.getBoundingClientRect();
      dispatch(setIsTextEditorDropdownOpen(true));
      fetchList(curSegment.textContent || "");
      setRect({ top, left, height });
    } else {
      dispatch(setIsTextEditorDropdownOpen(false));
    }
  }, [caretPosition, textEditorRef]);
};

export default useInlineSuggestionDropdown;
