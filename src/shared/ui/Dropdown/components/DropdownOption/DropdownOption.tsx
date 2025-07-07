import styles from "./DropdownOption.module.css";
import { joinClassNames } from "@shared";

interface DropdownOptionProps {
  className?: string;
}

const DropdownOption = ({ className }: DropdownOptionProps) => {
  const classNames = joinClassNames([styles["dropdown__option"], className]);

  return <div className={classNames}>DropdownOption</div>;
};

export default DropdownOption;
