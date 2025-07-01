import { useEffect } from "react";
import type { ICaretPosition } from "@shared/ui/TextEditor";
// import { useAppDispatch } from "@shared/lib";

interface useSetTextEditorHTMLandCaretProps {
  textEditorRef: React.RefObject<HTMLDivElement | null>;
  innerHTML: string;
  caretPosition: ICaretPosition;
}

const useSetTextEditorHTMLWithCaret = ({
  textEditorRef,
  innerHTML,
  caretPosition,
}: useSetTextEditorHTMLandCaretProps) => {
  //   const dispatch = useAppDispatch();
  useEffect(() => {
    if (!textEditorRef.current) return;

    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) return;

    const textEditor = textEditorRef.current;

    let { caretPos, row, col } = caretPosition;

    if (innerHTML) {
      textEditor.innerHTML = innerHTML;
    }

    console.log(innerHTML);

    // 현재 커서가 위치하는 segment
    const curSegment = textEditor.children[row].children[col];

    // 커서는 텍스트 노드에 설정 가능하기 떄문에 curSegment 안의 textnode 설정
    let textNode: Node;

    // segment 안에 텍스트가 존재하지 않는 경우
    if (curSegment.firstChild && curSegment.firstChild.nodeName === "BR") {
      textNode = curSegment;
    } else {
      textNode = curSegment.firstChild!.firstChild!;
    }

    const range = document.createRange();
    range.setStart(textNode, caretPos);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
  }, [innerHTML]);
};

export default useSetTextEditorHTMLWithCaret;
