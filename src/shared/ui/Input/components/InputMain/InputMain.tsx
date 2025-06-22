import type { ReactNode } from "react";
import styles from "./InputMain.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputMainProps {
  className?: string;
  children: ReactNode;
}

const InputMain = ({ className, children }: InputMainProps) => {
  const { field, isFocused, disabled, isValid, value } = useInputContext();

  const focusCond = isFocused ? styles["focused"] : styles["unfocused"];

  const validCond = isValid || !value ? "" : styles["invalid"];

  const classNames = joinClassNames([
    styles["input__main"],
    focusCond,
    validCond,
    disabled ? styles["disabled"] : "",
    className,
  ]);

  return (
    <label className={classNames} htmlFor={`input-field-${field}`}>
      {children}
    </label>
  );
};

export default InputMain;
