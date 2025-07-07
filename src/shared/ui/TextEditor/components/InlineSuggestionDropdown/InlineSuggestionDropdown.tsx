import styles from "./InlineSuggestionDropdown.module.css";
import { joinClassNames } from "@shared";
import type { IInlineRect } from "@shared/ui/TextEditor";

interface InlineSuggestionDropdownProps {
  className?: string;
  rect: IInlineRect | undefined;
}

const InlineSuggestionDropdown = ({
  className,
  rect,
}: InlineSuggestionDropdownProps) => {
  const classNames = joinClassNames([
    styles["inline__suggestion__dropdown"],
    className,
  ]);

  if (!rect || !rect.top || !rect.height || !rect.left) return;

  return (
    <div
      className={classNames}
      style={{ top: rect.top + rect.height, left: rect.left - 36 }}
    >
      InlineSuggestionDropdown
    </div>
  );
};

export default InlineSuggestionDropdown;
