import type { ReactNode } from "react";
import styles from "./Dropdown.module.css";
import { joinClassNames, type IRect } from "@shared";

interface DropdownProps {
  className?: string;
  children: ReactNode;
  position: IRect;
}

const Dropdown = ({ className, children, position }: DropdownProps) => {
  const { top, bottom, left, right } = position;

  const classNames = joinClassNames([styles["dropdown"], className]);

  return (
    <div className={classNames} style={{ top, bottom, left, right }}>
      {children}
    </div>
  );
};

export default Dropdown;
