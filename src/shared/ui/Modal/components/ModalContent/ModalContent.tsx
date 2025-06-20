import type { ReactNode } from "react";
import styles from "./ModalContent.module.css";
import { joinClassNames } from "@shared";

interface ModalContentProps {
  className?: string;
  children: ReactNode;
}

const ModalContent = ({ className, children }: ModalContentProps) => {
  const classNames = joinClassNames([styles["modal__content"], className]);

  return <div className={classNames}>{children}</div>;
};

export default ModalContent;
