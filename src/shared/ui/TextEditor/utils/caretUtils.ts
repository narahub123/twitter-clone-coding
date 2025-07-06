import type { ICaretPosition, ISegment } from "../types";

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

const correctCaretPosition = (
  caretPosition: ICaretPosition,
  segments: ISegment[]
): ICaretPosition => {
  let { caretPos, row: curRow, col: curCol } = caretPosition;

  // 커서가 위치해야 할 segment가 존재하지 않는 경우 (예: 텍스트 삭제로 인해 사라진 경우)
  if (!segments[curCol]) {
    // 이전 segment로 커서를 이동
    const prevSegment = segments[curCol - 1];

    if (prevSegment) {
      // 이전 segment가 존재하는 경우 해당 segment의 끝으로 커서 이동
      caretPos = prevSegment.text.length;
      curCol -= 1;
    } else {
      // 줄에서 segment가 하나도 없는 경우: 커서를 줄의 처음으로 이동
      caretPos = 0;
      curCol = 0;
    }
  } else {
    // 커서 위치가 현재 segment의 텍스트 길이보다 큰 경우, 다음 segment로 이동
    while (
      curCol < segments.length &&
      segments[curCol].text.length < caretPos
    ) {
      // 현재 segment의 길이만큼 커서 위치를 보정
      caretPos -= segments[curCol].text.length;
      curCol += 1;
    }
  }

  return {
    caretPos,
    row: curRow,
    col: curCol,
  };
};

export { getCaretPosition, correctCaretPosition };
