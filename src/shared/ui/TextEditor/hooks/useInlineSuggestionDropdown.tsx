import { useAppDispatch, useAppSelector } from "@shared/lib";
import { selectTextEditorCaretPosition } from "@shared/models";
import { setIsTextEditorDropdownOpen } from "@shared/models/slices/textEditorSlice";
import { isInlineSegment, type IInlineRect } from "@shared/ui/TextEditor";
import { useEffect } from "react";

interface useInlineSuggestionDropdownProps {
  textEditorRef: React.RefObject<HTMLDivElement | null>;
  setRect: React.Dispatch<React.SetStateAction<IInlineRect | undefined>>;
}

const useInlineSuggestionDropdown = ({
  textEditorRef,
  setRect,
}: useInlineSuggestionDropdownProps) => {
  const dispatch = useAppDispatch();

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
      setRect({ top, left, height });
    } else {
      dispatch(setIsTextEditorDropdownOpen(false));
    }
  }, [caretPosition, textEditorRef]);
};

export default useInlineSuggestionDropdown;
