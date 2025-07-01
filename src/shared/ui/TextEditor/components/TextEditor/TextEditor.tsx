import { useRef, useState } from "react";
import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared";
import {
  useSetTextEditorHTMLWithCaret,
  useTextEditorInput,
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

  const handleInput = useTextEditorInput();

  useSetTextEditorHTMLWithCaret({ textEditorRef, innerHTML });

  return (
    <div
      className={classNames}
      contentEditable={!disabled}
      suppressContentEditableWarning
      onInput={(e) => handleInput({ e, setInnerHTML })}
      ref={textEditorRef}
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
