import styles from "./InlineSuggestionDropdown.module.css";
import {
  Dropdown,
  joinClassNames,
  selectIsLoading,
  selectTextEditorList,
  selectTextEditorSelectedIndex,
  useAppSelector,
} from "@shared";
import {
  useReplaceTextInTextEditor,
  type IInlineRect,
} from "@shared/ui/TextEditor";

interface InlineSuggestionDropdownProps {
  className?: string;
  textEditorRef: React.RefObject<HTMLDivElement | null>;
  rect: IInlineRect | undefined;
}

const InlineSuggestionDropdown = ({
  className,
  rect,
  textEditorRef,
}: InlineSuggestionDropdownProps) => {
  const classNames = joinClassNames([
    styles["inline__suggestion__dropdown"],
    className,
  ]);

  const isLoading = useAppSelector(selectIsLoading);
  const selectedIndex = useAppSelector(selectTextEditorSelectedIndex);
  const list = useAppSelector(selectTextEditorList);

  const replaceTextInTextEditor = useReplaceTextInTextEditor({ textEditorRef });

  if (
    !rect ||
    !rect.top ||
    !rect.height ||
    !rect.left ||
    !textEditorRef.current
  )
    return;

  return (
    <Dropdown
      className={classNames}
      position={{ top: rect.top + rect.height, left: rect.left - 36 }}
    >
      <Dropdown.Progressbar isLoading={isLoading} />
      {list.map((item, idx) => (
        <Dropdown.Option
          key={idx}
          onClick={() => replaceTextInTextEditor(list[idx].text)}
          selected={idx === selectedIndex}
        >
          {item.text}
        </Dropdown.Option>
      ))}
    </Dropdown>
  );
};

export default InlineSuggestionDropdown;
