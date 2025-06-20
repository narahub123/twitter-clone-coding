import type { ReactNode } from "react";
import styles from "./ModalBody.module.css";
import { joinClassNames } from "@shared";

interface ModalBodyProps {
  className?: string;
  children: ReactNode;
}

const ModalBody = ({ className, children }: ModalBodyProps) => {
  const classNames = joinClassNames([styles["modal__body"], className]);

  return <div className={classNames}>{children}</div>;
};

export default ModalBody;
