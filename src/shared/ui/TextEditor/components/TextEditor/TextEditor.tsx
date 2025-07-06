import { useRef, useState } from "react";
import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared";
import {
  handleBlur,
  handleCompositionEnd,
  handleCompositionStart,
  handleFocus,
  useSetTextEditorHTMLWithCaret,
  useTextEditorClick,
  useTextEditorInput,
  useTextEditorKeyDown,
  useTextEditorKeyUp,
  type ICaretPosition,
} from "@shared/ui/TextEditor";

interface TextEditorProps {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

const TextEditor = ({
  className,
  disabled = false,
  placeholder,
}: TextEditorProps) => {
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

  // 포커스 상태
  const [isFocused, setIsFocused] = useState(false);

  const phCond =
    placeholder && !isFocused && !textEditorRef.current?.textContent;

  const handleInput = useTextEditorInput();

  // keydown handler
  const handleKeydown = useTextEditorKeyDown();

  // 방향키 핸들러
  const handleKeyUp = useTextEditorKeyUp();

  // click 핸들러
  const handleClick = useTextEditorClick();

  useSetTextEditorHTMLWithCaret({
    textEditorRef,
    innerHTML,
    caretPosition,
    isComposing,
  });

  console.log("현재 커서 위치", caretPosition);

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
      onKeyDown={(e) => handleKeydown({ e, setInnerHTML, setCaretPosition })}
      onClick={(e) => handleClick(e, setInnerHTML, setCaretPosition)}
      onKeyUp={(e) => handleKeyUp({ e, setCaretPosition, setInnerHTML })}
      onFocus={() => handleFocus(setIsFocused)}
      onBlur={() => handleBlur(setIsFocused)}
      aria-describedby={phCond ? "placeholder" : undefined}
    >
      <div className={styles["line"]} data-offset="0-0">
        {phCond && (
          <span
            className={styles["placeholder"]}
            id="placeholder"
            role="presentation"
          >
            {placeholder}
          </span>
        )}
        <span className={styles["segment"]} data-offset="0-0">
          <br data-text="true" />
        </span>
      </div>
    </div>
  );
};

export default TextEditor;
