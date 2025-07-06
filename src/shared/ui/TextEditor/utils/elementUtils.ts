import {
  extractLines,
  extractSegments,
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
  const lines = extractLines(TextEditor);

  let linesHTML: string = "";

  for (let row = 0; row < lines.length; row++) {
    const line = lines[row];

    const segments = extractSegments(line);

    let segmentsHTML: string = "";

    for (let col = 0; col < segments.length; col++) {
      const span = segments[col];

      segmentsHTML += createSegment(span, row, col);
    }

    linesHTML += createLine(segmentsHTML, row);
  }

  return linesHTML;
};

export { createSegment, createLine, createEditorHTML };
