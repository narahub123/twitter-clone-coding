import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared";

interface TextEditorProps {
  className?: string;
  disabled?: boolean;
}

const TextEditor = ({ className, disabled = false }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);

  return (
    <div
      className={classNames}
      contentEditable={!disabled}
      suppressContentEditableWarning
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
