import type { ReactNode } from "react";
import styles from "./DropdownOption.module.css";
import { joinClassNames } from "@shared";

interface DropdownOptionProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  selected?: boolean;
}

const DropdownOption = ({
  className,
  children,
  onClick,
  selected = false,
}: DropdownOptionProps) => {
  const classNames = joinClassNames([
    styles["dropdown__option"],
    selected ? styles["selected"] : "",
    className,
  ]);

  return (
    <button className={classNames} role="option" onClick={onClick}>
      {children}
    </button>
  );
};

export default DropdownOption;
