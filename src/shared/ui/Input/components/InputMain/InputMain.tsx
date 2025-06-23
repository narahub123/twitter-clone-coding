import type { ReactNode } from "react";
import styles from "./InputMain.module.css";
import tokens from "@shared/styles/design-system.module.css";
import { joinClassNames, useAppSelector } from "@shared";
import { useInputContext } from "@shared/ui/Input";
import { selectColorTheme } from "@entities";

interface InputMainProps {
  className?: string;
  children: ReactNode;
}

const InputMain = ({ className, children }: InputMainProps) => {
  const { field, isFocused, disabled, isValid, value, color } =
    useInputContext();

  const colorTheme = useAppSelector(selectColorTheme);

  const focusCond = isFocused
    ? color === "colorTheme"
      ? tokens[`input-focus-${colorTheme}`]
      : tokens[`input-focus-${color}`]
    : styles["unfocused"];

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
