import type { ReactNode } from "react";
import styles from "./ModalContainer.module.css";
import { joinClassNames } from "@shared";

interface ModalContainerProps {
  className?: string;
  children: ReactNode;
}

const ModalContainer = ({ className, children }: ModalContainerProps) => {
  const classNames = joinClassNames([styles["modal__container"], className]);

  return <div className={classNames}>{children}</div>;
};

export default ModalContainer;
