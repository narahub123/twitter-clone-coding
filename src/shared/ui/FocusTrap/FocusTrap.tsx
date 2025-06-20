import type { ReactNode } from "react";
import styles from "./FocusTrap.module.css";
import { joinClassNames } from "@shared";

interface FocusTrapProps {
  children: ReactNode;
}

const FocusTrap = ({ children }: FocusTrapProps) => {
  const classNames = joinClassNames([styles["focustrap"]]);

  return <div className={classNames}>{children}</div>;
};

export default FocusTrap;
