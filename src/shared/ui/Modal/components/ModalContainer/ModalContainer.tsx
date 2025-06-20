import type { ReactNode } from "react";
import styles from "./ModalContainer.module.css";
import { joinClassNames, Portal } from "@shared";
import { ModalContextProvider, type IModalContext } from "@shared/ui/Modal";

interface ModalContainerProps {
  className?: string;
  children: ReactNode;
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModalContainer = ({
  className,
  children,
  id,
  isOpen,
  onClose,
}: ModalContainerProps) => {
  const classNames = joinClassNames([styles["modal__container"], className]);

  const value: IModalContext = {
    isOpen,
    onClose,
  };
  
  return (
    <Portal id={`modal-${id}`}>
      <ModalContextProvider value={value}>
        <div className={classNames}>{children}</div>
      </ModalContextProvider>
    </Portal>
  );
};

export default ModalContainer;
