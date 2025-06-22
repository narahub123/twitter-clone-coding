import type { ReactNode } from "react";
import styles from "./InputExtra.module.css";
import { joinClassNames } from "@shared";

interface InputExtraProps {
  className?: string;
  children: ReactNode;
}

const InputExtra = ({ className, children }: InputExtraProps) => {
  const classNames = joinClassNames([styles["input__extra"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputExtra;
