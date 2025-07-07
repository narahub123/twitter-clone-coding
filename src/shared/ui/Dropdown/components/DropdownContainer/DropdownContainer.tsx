import type { ReactNode } from "react";
import styles from "./DropdownContainer.module.css";
import { joinClassNames, type DropdownRoleType, type IRect } from "@shared";

interface DropdownContainerProps {
  className?: string;
  children: ReactNode;
  position: IRect;
  role?: DropdownRoleType;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}

const DropdownContainer = ({
  className,
  children,
  position,
  role = "listbox",
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
}: DropdownContainerProps) => {
  const { top, bottom, left, right } = position;

  const classNames = joinClassNames([styles["dropdown"], className]);

  return (
    <div
      className={classNames}
      style={{ top, bottom, left, right }}
      role={role}
      aria-label={role !== "dialog" ? ariaLabel : undefined}
      aria-labelledby={role === "dialog" ? ariaLabelledBy : undefined}
      aria-describedby={role === "dialog" ? ariaDescribedBy : undefined}
      tabIndex={-1} // 탭키 순환에서 제외
    >
      {children}
    </div>
  );
};

export default DropdownContainer;
