import type { ICaretPosition } from "@shared/ui/TextEditor";

interface ITextEditor {
  innerHTML: string;
  caretPosition: ICaretPosition;
  isOpen: boolean;
  selectedIndex: number;
  list: any[];
}

interface ILoadingState {
  isLoading: boolean;
}

export type { ITextEditor, ILoadingState };
