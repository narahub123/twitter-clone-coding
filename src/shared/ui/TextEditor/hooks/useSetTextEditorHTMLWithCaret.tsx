import { useEffect } from "react";
import { isInlineSegment } from "@shared/ui/TextEditor";
import { useAppSelector } from "@shared/lib";
import {
  selectTextEditorCaretPosition,
  selectTextEditorInnerHTML,
} from "@shared/models";
// import { useAppDispatch } from "@shared/lib";

interface useSetTextEditorHTMLandCaretProps {
  textEditorRef: React.RefObject<HTMLDivElement | null>;
  isComposing: boolean;
}

const useSetTextEditorHTMLWithCaret = ({
  textEditorRef,
  isComposing,
}: useSetTextEditorHTMLandCaretProps) => {
  const innerHTML = useAppSelector(selectTextEditorInnerHTML);
  const caretPosition = useAppSelector(selectTextEditorCaretPosition);

  useEffect(() => {
    if (!textEditorRef.current) return;

    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) return;

    if (isComposing) return;

    const textEditor = textEditorRef.current;

    let { caretPos, row, col } = caretPosition;

    console.log("커서 위치", caretPos, row, col);

    if (innerHTML) {
      textEditor.innerHTML = innerHTML;
    }

    console.log(innerHTML);

    // 현재 커서가 위치하는 segment
    const curSegment = textEditor.children[row].children[col] as HTMLElement;

    console.log("커서가 위치하는 segment", curSegment);

    // 커서는 텍스트 노드에 설정 가능하기 떄문에 curSegment 안의 textnode 설정
    let textNode: Node;

    // segment 안에 텍스트가 존재하지 않는 경우
    if (curSegment.firstChild && curSegment.firstChild.nodeName === "BR") {
      textNode = curSegment;
    } else if (isInlineSegment(curSegment)) {
      // 현재 세그먼트 inline 세그먼트인 경우
      textNode = curSegment.firstChild!.firstChild!.firstChild!;
    } else {
      textNode = curSegment.firstChild!.firstChild!;
    }

    console.log("커서가 삽입된 텍스트노드", textNode);

    const range = document.createRange();
    range.setStart(textNode, caretPos);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
  }, [innerHTML, caretPosition]);
};

export default useSetTextEditorHTMLWithCaret;
