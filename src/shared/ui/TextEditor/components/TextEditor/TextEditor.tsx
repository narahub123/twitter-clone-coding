import { useRef, useState } from "react";
import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared";
import {
  handleBlur,
  handleCompositionEnd,
  handleCompositionStart,
  handleFocus,
  InlineSuggestionDropdown,
  useInlineSuggestionDropdown,
  useSetTextEditorHTMLWithCaret,
  useTextEditorClick,
  useTextEditorInput,
  useTextEditorKeyDown,
  useTextEditorKeyUp,
  type IInlineRect,
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

  // 한글 작성 중 여부 상태
  const [isComposing, setIsComposing] = useState(false);

  // 포커스 상태
  const [isFocused, setIsFocused] = useState(false);

  // InlineSuggestionDropdwon 여닫기 상태
  const [isOpen, setIsOpen] = useState(false);

  // inline의 위치
  const [rect, setRect] = useState<IInlineRect>();

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
    isComposing,
  });

  useInlineSuggestionDropdown({ textEditorRef, setIsOpen, setRect });

  console.log(isOpen);

  return (
    <div className={styles["wrapper"]}>
      <div
        className={classNames}
        contentEditable={!disabled}
        suppressContentEditableWarning
        onInput={(e) => handleInput({ e, isComposing })}
        ref={textEditorRef}
        onCompositionStart={() => handleCompositionStart(setIsComposing)}
        onCompositionEnd={() => handleCompositionEnd(setIsComposing)}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeydown}
        onClick={handleClick}
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
      {isOpen && <InlineSuggestionDropdown rect={rect} />}
    </div>
  );
};

export default TextEditor;
