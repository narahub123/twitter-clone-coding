import type { ReactNode } from "react";
import styles from "./InputMain.module.css";
import { joinClassNames } from "@shared";

interface InputMainProps {
  className?: string;
  children: ReactNode;
}

const InputMain = ({ className, children }: InputMainProps) => {
  const classNames = joinClassNames([styles["input__main"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputMain;
