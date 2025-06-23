import { TextEditor } from "@shared";
import styles from "./TextEditorTestPage.module.css";

interface TextEditorTestPageProps {}

const TextEditorTestPage = ({}: TextEditorTestPageProps) => {
  return (
    <div className={styles["text__editor__test__page"]}>
      <TextEditor />
    </div>
  );
};

export default TextEditorTestPage;
