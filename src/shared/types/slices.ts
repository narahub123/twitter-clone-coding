import type { ICaretPosition } from "@shared/ui/TextEditor";

interface ITextEditor {
  innerHTML: string;
  caretPosition: ICaretPosition;
  isOpen: boolean;
  selectedIndex: number;
}

export type { ITextEditor };
