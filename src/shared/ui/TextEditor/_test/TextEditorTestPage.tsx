import { Progressbar, TextEditor } from "@shared";
import styles from "./TextEditorTestPage.module.css";
import { useState } from "react";

interface TextEditorTestPageProps {}

const TextEditorTestPage = ({}: TextEditorTestPageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={styles["text__editor__test__page"]}>
      <TextEditor placeholder="무슨일이 일어나고 있나요?" />
      <Progressbar isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
};

export default TextEditorTestPage;
