import { useRef, useState } from "react";
import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared";
import {
  handleCompositionEnd,
  handleCompositionStart,
  useSetTextEditorHTMLWithCaret,
  useTextEditorInput,
  useTextEditorKeyDown,
  type ICaretPosition,
} from "@shared/ui/TextEditor";

interface TextEditorProps {
  className?: string;
  disabled?: boolean;
}

const TextEditor = ({ className, disabled = false }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);

  const textEditorRef = useRef<HTMLDivElement>(null);

  // handleInput에서 생성된 innerHTLM의 상태
  const [innerHTML, setInnerHTML] = useState("");

  // 커서의 위치 상태
  const [caretPosition, setCaretPosition] = useState<ICaretPosition>({
    caretPos: 0,
    row: 0,
    col: 0,
  });

  // 한글 작성 중 여부 상태
  const [isComposing, setIsComposing] = useState(false);

  const handleInput = useTextEditorInput();

  // keydown handler
  const handleKeydown = useTextEditorKeyDown();

  useSetTextEditorHTMLWithCaret({
    textEditorRef,
    innerHTML,
    caretPosition,
    isComposing,
  });

  return (
    <div
      className={classNames}
      contentEditable={!disabled}
      suppressContentEditableWarning
      onInput={(e) =>
        handleInput({ e, setInnerHTML, setCaretPosition, isComposing })
      }
      ref={textEditorRef}
      onCompositionStart={() => handleCompositionStart(setIsComposing)}
      onCompositionEnd={() => handleCompositionEnd(setIsComposing)}
      onKeyDown={(e) =>
        handleKeydown({ e, setInnerHTML, caretPosition, setCaretPosition })
      }
    >
      <div className={styles["line"]} data-offset="0-0">
        <span className={styles["segment"]} data-offset="0-0">
          <br data-text="true" />
        </span>
      </div>
    </div>
  );
};

export default TextEditor;
