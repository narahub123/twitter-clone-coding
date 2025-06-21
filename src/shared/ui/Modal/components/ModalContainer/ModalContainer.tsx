import { useEffect, type ReactNode } from "react";
import styles from "./ModalContainer.module.css";
import { joinClassNames, Portal } from "@shared";
import { ModalContextProvider, type IModalContext } from "@shared/ui/Modal";

interface ModalContainerProps {
  className?: string;
  children: ReactNode;
  id: string;
  isOpen: boolean;
  onClose: () => void;
  firstFocusIndex?: number;
}

const ModalContainer = ({
  className,
  children,
  id,
  isOpen,
  onClose,
  firstFocusIndex,
}: ModalContainerProps) => {
  const classNames = joinClassNames([styles["modal__container"], className]);

  // 배경 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const value: IModalContext = {
    isOpen,
    onClose,
    firstFocusIndex,
  };

  if (!isOpen) return null;

  return (
    <Portal id={`modal-${id}`}>
      <ModalContextProvider value={value}>
        <div className={classNames}>{children}</div>
      </ModalContextProvider>
    </Portal>
  );
};

export default ModalContainer;
