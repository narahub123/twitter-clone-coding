import styles from "./InlineSuggestionDropdown.module.css";
import { joinClassNames } from "@shared";

interface InlineSuggestionDropdownProps {
  className?: string;
  disabled?: boolean;
}

const InlineSuggestionDropdown = ({
  className,
}: InlineSuggestionDropdownProps) => {
  const classNames = joinClassNames([
    styles["inline__suggestion__dropdown"],
    className,
  ]);

  return <div className={classNames}>InlineSuggestionDropdown</div>;
};

export default InlineSuggestionDropdown;
