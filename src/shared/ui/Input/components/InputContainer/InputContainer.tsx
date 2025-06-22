import type { ReactNode } from "react";
import styles from "./InputContainer.module.css";
import { joinClassNames } from "@shared";

interface InputContainerProps {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

const InputContainer = ({
  className,
  disabled = false,
  children,
}: InputContainerProps) => {
  const classNames = joinClassNames([styles["input__container"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputContainer;
