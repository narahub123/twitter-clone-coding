import { type ISegment } from "@shared/ui/TextEditor";
import styles from "@shared/ui/TextEditor/components/TextEditor/TextEditor.module.css";

const createSegment = (span: ISegment, row: number, col: number): string => {
  const elem = `<span class="${styles["segment"]}" data-offset="${row}-${col}"><span data-text="true">${span.text}</span></span>`;

  let segment = "";
  if (span.type === "text") {
    segment = elem;
  } else {
    segment = `<span class="${styles["inline"]}">${elem}</span>`;
  }

  return segment;
};

const createLine = (innerHTML: string, row: number): string => {
  return `<div class="${styles["line"]}" data-offset="${row}-0">${innerHTML}</div>`;
};

export { createSegment, createLine };
