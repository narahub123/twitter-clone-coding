import { useRef, useState } from "react";
import styles from "./TextEditor.module.css";
import { Dropdown, joinClassNames, useAppSelector } from "@shared";
import {
  handleBlur,
  handleCompositionEnd,
  handleCompositionStart,
  handleFocus,
  useInlineSuggestionDropdown,
  useReplaceTextInTextEditor,
  useSetTextEditorHTMLWithCaret,
  useTextEditorClick,
  useTextEditorInput,
  useTextEditorKeyDown,
  useTextEditorKeyUp,
  type IInlineRect,
} from "@shared/ui/TextEditor";
import {
  selectIsTextEditorDropdownOpen,
  selectTextEditorSelectedIndex,
} from "@shared/models/selectors/textEditorSelectors";

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

  const isOpen = useAppSelector(selectIsTextEditorDropdownOpen);

  const selectedIndex = useAppSelector(selectTextEditorSelectedIndex);

  // inline의 위치
  const [rect, setRect] = useState<IInlineRect>();

  const [isLoading, setIsLoading] = useState(true);

  const list = [
    {
      text: "2 dfkjkdjf",
      onClick: () => {
        console.log("이건 뭐야 1");
      },
      selected: false,
    },
    {
      text: "1 dfkjkdjf",
      onClick: () => {
        console.log("이건 뭐야 2");
      },
      selected: true,
    },
    {
      text: "3 dfkjkdjf",
      onClick: () => {
        console.log("이건 뭐야 3");
      },
      selected: false,
    },
  ];

  const phCond =
    placeholder && !isFocused && !textEditorRef.current?.textContent;

  const handleInput = useTextEditorInput();

  // keydown handler
  const handleKeydown = useTextEditorKeyDown({ list, textEditorRef });

  // 방향키 핸들러
  const handleKeyUp = useTextEditorKeyUp();

  // click 핸들러
  const handleClick = useTextEditorClick();

  useSetTextEditorHTMLWithCaret({
    textEditorRef,
    isComposing,
  });

  useInlineSuggestionDropdown({ textEditorRef, setRect });

  const replaceTextInTextEditor = useReplaceTextInTextEditor({
    textEditorRef,
  });

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
      {isOpen && rect && rect.top && rect.height && rect.left && (
        <Dropdown
          position={{ top: rect.top + rect.height, left: rect.left - 20 }}
        >
          {isOpen && (
            <Dropdown.Progressbar
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          )}
          {list.map((item, idx) => (
            <Dropdown.MenuItem
              key={item.text}
              onClick={() => replaceTextInTextEditor(list[idx].text)}
              selected={idx === selectedIndex}
            >
              {item.text}
            </Dropdown.MenuItem>
          ))}
        </Dropdown>
      )}
    </div>
  );
};

export default TextEditor;
