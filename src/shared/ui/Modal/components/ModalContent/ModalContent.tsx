import { useRef, type ReactNode } from "react";
import styles from "./ModalContent.module.css";
import {
  joinClassNames,
  MODAL_CONTENT_HEIGHT,
  MODAL_CONTENT_WIDTH,
  useClickOutside,
} from "@shared";
import { normalizePercentSize, useModalContext } from "@shared/ui/Modal";

interface ModalContentProps {
  className?: string;
  children: ReactNode;
  width?: number | string;
  height?: number | string;
}

const ModalContent = ({
  className,
  children,
  width = MODAL_CONTENT_WIDTH,
  height = MODAL_CONTENT_HEIGHT,
}: ModalContentProps) => {
  const classNames = joinClassNames([styles["modal__content"], className]);
  const containerRef = useRef<HTMLDivElement>(null);

  const { onClose } = useModalContext();

  useClickOutside(containerRef, onClose);

  return (
    <div
      className={classNames}
      style={{
        width: `${normalizePercentSize(width)}`,
        height: `${normalizePercentSize(height)}`,
      }}
      ref={containerRef}
    >
      <div className={styles["modal__content__wrapper"]}>{children}</div>
    </div>
  );
};

export default ModalContent;
