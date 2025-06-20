import type { ReactNode } from "react";
import styles from "./ModalHeader.module.css";
import { joinClassNames } from "@shared";

interface ModalHeaderProps {
  className?: string;
  children: ReactNode;
}

const ModalHeader = ({ className, children }: ModalHeaderProps) => {
  const classNames = joinClassNames([styles["modal__header"], className]);

  return <div className={classNames}>{children}</div>;
};

export default ModalHeader;
