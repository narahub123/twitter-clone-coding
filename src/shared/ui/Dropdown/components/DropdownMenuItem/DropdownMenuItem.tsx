import type { ReactNode } from "react";
import styles from "./DropdownMenuItem.module.css";
import { joinClassNames } from "@shared";

interface DropdownMenuItemProps {
  className?: string;
  selected?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const DropdownMenuItem = ({
  className,
  selected = false,
  onClick,
  children,
}: DropdownMenuItemProps) => {
  const classNames = joinClassNames([
    styles["dropdown__menu__item"],
    selected ? styles["selected"] : "",
    className,
  ]);

  return (
    <button className={classNames} onClick={onClick} role="menuitem">
      {children}
    </button>
  );
};

export default DropdownMenuItem;
