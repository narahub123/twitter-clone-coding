import { useRef, type ReactNode } from "react";
import styles from "./ModalContainer.module.css";
import {
  joinClassNames,
  Portal,
  useBodyScrollLock,
  useFadeInAndOut,
} from "@shared";
import { ModalContextProvider, type IModalContext } from "@shared/ui/Modal";

interface ModalContainerProps {
  className?: string;
  children: ReactNode;
  id: string;
  isOpen: boolean;
  onClose: () => void;
  firstFocusIndex?: number;
  withFade?: boolean;
}

const ModalContainer = ({
  className,
  children,
  id,
  isOpen,
  onClose,
  firstFocusIndex,
  withFade = true,
}: ModalContainerProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { shouldRender, fade } = useFadeInAndOut(modalRef, isOpen, withFade);

  const classNames = joinClassNames([
    styles["modal__container"],
    fade,
    className,
  ]);

  // 배경 스크롤 막기
  useBodyScrollLock(isOpen);

  const value: IModalContext = {
    isOpen,
    onClose,
    firstFocusIndex,
  };

  if (!shouldRender) return null;

  return (
    <Portal id={`modal-${id}`}>
      <ModalContextProvider value={value}>
        <div className={classNames} ref={modalRef}>
          {children}
        </div>
      </ModalContextProvider>
    </Portal>
  );
};

export default ModalContainer;
