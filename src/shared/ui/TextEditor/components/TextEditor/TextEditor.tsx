import styles from "./TextEditor.module.css";
import { joinClassNames } from "@shared";

interface TextEditorProps {
  className?: string;
  disabled?: boolean;
}

const TextEditor = ({ className, disabled = false }: TextEditorProps) => {
  const classNames = joinClassNames([styles["text__editor"], className]);

  return <div className={classNames} contentEditable={!disabled}></div>;
};

export default TextEditor;
