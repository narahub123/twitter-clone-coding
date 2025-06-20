import type { ReactNode } from "react";
import styles from "./ModalContainer.module.css";
import { joinClassNames, Portal } from "@shared";

interface ModalContainerProps {
  className?: string;
  children: ReactNode;
  id: string;
}

const ModalContainer = ({ className, children, id }: ModalContainerProps) => {
  const classNames = joinClassNames([styles["modal__container"], className]);

  return (
    <Portal id={`modal-${id}`}>
      <div className={classNames}>{children}</div>
    </Portal>
  );
};

export default ModalContainer;
