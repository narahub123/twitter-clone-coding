import { useEffect } from "react";
// import { useAppDispatch } from "@shared/lib";

interface useSetTextEditorHTMLandCaretProps {
  textEditorRef: React.RefObject<HTMLDivElement | null>;
  innerHTML: string;
}

const useSetTextEditorHTMLWithCaret = ({
  textEditorRef,
  innerHTML,
}: useSetTextEditorHTMLandCaretProps) => {
  //   const dispatch = useAppDispatch();
  useEffect(() => {
    if (!textEditorRef.current) return;

    const textEditor = textEditorRef.current;

    if (innerHTML) {
      textEditor.innerHTML = innerHTML;
    }

    console.log(innerHTML);
  }, [innerHTML]);
};

export default useSetTextEditorHTMLWithCaret;
