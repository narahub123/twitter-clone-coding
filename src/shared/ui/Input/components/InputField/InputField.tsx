import type { ReactNode } from "react";
import styles from "./InputField.module.css";
import { joinClassNames } from "@shared";

interface InputFieldProps {
  className?: string;
  children: ReactNode;
}

const InputField = ({ className, children }: InputFieldProps) => {
  const classNames = joinClassNames([styles["input__field"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputField;
