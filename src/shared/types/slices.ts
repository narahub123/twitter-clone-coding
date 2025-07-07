import type { ICaretPosition } from "@shared/ui/TextEditor";

interface ITextEditor {
  innerHTML: string;
  caretPosition: ICaretPosition;
}

export type { ITextEditor };
