import {
  extractLines,
  extractSegments,
  getCaretPosition,
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

const createEditorHTML = (TextEditor: HTMLDivElement) => {
  let { caretPos, row: curRow, col: curCol } = getCaretPosition();

  const lines = extractLines(TextEditor);

  let linesHTML: string = "";

  for (let row = 0; row < lines.length; row++) {
    const line = lines[row];

    const segments = extractSegments(line);

    let segmentsHTML: string = "";

    // caretPosition 업데이트
    // 현재 줄이 커서가 위치한 줄인 경우
    if (row === curRow) {
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

export { createSegment, createLine, createEditorHTML };
