import type { ICaretPosition } from "../types";

const getCaretPosition = (): ICaretPosition => {
  const selection = window.getSelection();

  // selection 객체가 없거나 range 설정이 되지 않는 경우
  if (!selection || selection.rangeCount === 0) {
    return {
      caretPos: 0,
      row: 0,
      col: 0,
    };
  }

  // range 객체 가져오기
  const range = selection.getRangeAt(0);

  // 현재 커서가 위치한 노드 가져오기
  let node: Node = range.startContainer;

  // 현재 노드에서 커서의 위치
  let caretPos = range.startOffset;

  // node를 segment 기준으로 변경하기
  // 현재 노드가 텍스트 노드인 경우
  if (node.nodeType === Node.TEXT_NODE) {
    const parentElem = node.parentElement!;

    // 부모 요소가 segment인 경우
    if (parentElem instanceof HTMLSpanElement && parentElem.dataset.offset) {
      node = parentElem;
    } else {
      // 부모 요소가 segment가 아닌 경우 : 현재는 텍스트 span으로 가정함
      node = parentElem.parentElement!;
    }
  }

  // 현재 노드가 segment 인 경우
  if (node instanceof HTMLSpanElement && node.dataset.offset) {
    const [row, col] = node.dataset.offset.split("-").map(Number);

    return {
      caretPos,
      row,
      col,
    };
  }

  return {
    caretPos,
    row: 0,
    col: 0,
  };
};

export { getCaretPosition };
