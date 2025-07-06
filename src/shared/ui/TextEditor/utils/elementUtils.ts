import {
  correctCaretPosition,
  extractSegments,
  type ICaretPosition,
  type ISegment,
} from "@shared/ui/TextEditor";
import styles from "@shared/ui/TextEditor/components/TextEditor/TextEditor.module.css";

const createSegment = (span: ISegment, row: number, col: number): string => {
  const elem = `<span class="${styles["segment"]}" data-offset="${row}-${col}"><span data-text="true">${span.text}</span></span>`;

  console.log(elem);

  let segment = "";
  if (!span.text) {
    segment = `<span class="${styles["segment"]}" data-offset="${row}-${col}"><br data-text="true" /></span>`;
  } else if (span.type === "text") {
    segment = elem;
  } else {
    segment = `<span class="${styles["inline"]}">${elem}</span>`;
  }

  return segment;
};

const createLine = (innerHTML: string, row: number): string => {
  return `<div class="${styles["line"]}" data-offset="${row}-0">${innerHTML}</div>`;
};

const createEditorHTML = (lines: string[], caretPosition: ICaretPosition) => {
  let { caretPos, row: curRow, col: curCol } = caretPosition;

  let linesHTML: string = "";

  for (let row = 0; row < lines.length; row++) {
    const line = lines[row];

    const segments = extractSegments(line);

    let segmentsHTML: string = "";

    // caretPosition 업데이트
    // 현재 줄이 커서가 위치한 줄인 경우
    if (row === caretPosition.row) {
      const corrected = correctCaretPosition(caretPosition, segments);

      caretPos = corrected.caretPos;
      curRow = corrected.row;
      curCol = corrected.col;
    }

    for (let col = 0; col < segments.length; col++) {
      const span = segments[col];

      segmentsHTML += createSegment(span, row, col);
    }

    linesHTML += createLine(segmentsHTML, row);
  }

  return {
    innerHTML: linesHTML,
    caretPosition: {
      caretPos,
      row: curRow,
      col: curCol,
    },
  };
};

const updateLinesAfterEnter = (
  lines: string[],
  caretPosition: ICaretPosition
) => {
  const { caretPos, row, col: curCol } = caretPosition;

  // 커서가 존재하는 줄
  const curLine = lines[row];

  // 커서가 존재하는 줄의 segments
  const curSegments = extractSegments(curLine);

  // 커서가 존재하는 segment
  const curSegment = curSegments[curCol];

  // 커서가 존재하는 segment 내의 text
  const curText = curSegment.text;

  // 현재 줄에 남아 있는 텍스트
  let remainingText = "";

  for (let col = 0; col < curCol; col++) {
    const segment = curSegments[col];

    remainingText += segment.text;
  }

  remainingText += curText.slice(0, caretPos);

  lines.splice(row, 1, remainingText);

  // 커서가 존재하는 segment 내에서 커서 뒤의 텍스
  let afterText = curText.slice(caretPos) || "";

  console.log(afterText);

  // 현재 segment 뒤의 segments
  const afterSegments = curSegments.slice(curCol + 1);

  // afterSegments의 text
  afterText += afterSegments.map((s) => s.text).join("");

  // 새 줄을 추가 + 텍스트 변경
  lines.splice(row + 1, 0, afterText);

  return lines;
};

export { createSegment, createLine, createEditorHTML, updateLinesAfterEnter };
