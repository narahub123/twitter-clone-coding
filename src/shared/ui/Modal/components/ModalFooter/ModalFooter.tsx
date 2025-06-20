import type { ReactNode } from "react";
import styles from "./ModalFooter.module.css";
import { joinClassNames } from "@shared";

interface ModalFooterProps {
  className?: string;
  children: ReactNode;
}

const ModalFooter = ({ className, children }: ModalFooterProps) => {
  const classNames = joinClassNames([styles["modal__footer"], className]);

  return <div className={classNames}>{children}</div>;
};

export default ModalFooter;
