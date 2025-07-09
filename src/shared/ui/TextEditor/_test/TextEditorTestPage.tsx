import { Progressbar, TextEditor } from "@shared";
import styles from "./TextEditorTestPage.module.css";

interface TextEditorTestPageProps {}

const TextEditorTestPage = ({}: TextEditorTestPageProps) => {
  return (
    <div className={styles["text__editor__test__page"]}>
      <TextEditor placeholder="무슨일이 일어나고 있나요?" />
      <Progressbar />
    </div>
  );
};

export default TextEditorTestPage;
