import { useAppSelector } from "@shared/lib";
import { selectTextEditorCaretPosition } from "@shared/models";
import { isInlineSegment, type IInlineRect } from "@shared/ui/TextEditor";
import { useEffect } from "react";

interface useInlineSuggestionDropdownProps {
  textEditorRef: React.RefObject<HTMLDivElement | null>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRect: React.Dispatch<React.SetStateAction<IInlineRect | undefined>>;
}

const useInlineSuggestionDropdown = ({
  textEditorRef,
  setIsOpen,
  setRect,
}: useInlineSuggestionDropdownProps) => {
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
      setIsOpen((prev) => (prev !== true ? true : prev));
      setRect({ top, left, height });
    } else {
      setIsOpen((prev) => (prev !== false ? false : prev));
    }
  }, [caretPosition, textEditorRef]);
};

export default useInlineSuggestionDropdown;
