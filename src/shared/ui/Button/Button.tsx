import type { ReactNode } from "react";
import styles from "./Button.module.css";
import { joinClassNames } from "@shared";

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({ className, disabled = false, children }: ButtonProps) => {
  const classNames = joinClassNames([styles["button"], className]);

  return (
    <button className={classNames} disabled={disabled} aria-disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
