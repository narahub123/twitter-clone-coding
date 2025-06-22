import type { ReactNode } from "react";
import styles from "./InputField.module.css";
import { joinClassNames } from "@shared";
import { useInputContext } from "@shared/ui/Input";

interface InputFieldProps {
  className?: string;
  children: ReactNode;
}

const InputField = ({ className, children }: InputFieldProps) => {
  const { isFocused } = useInputContext();

  const focusCond = isFocused ? styles["focused"] : styles["unfocused"];

  const classNames = joinClassNames([
    styles["input__field"],
    focusCond,
    className,
  ]);

  return <div className={classNames}>{children}</div>;
};

export default InputField;
