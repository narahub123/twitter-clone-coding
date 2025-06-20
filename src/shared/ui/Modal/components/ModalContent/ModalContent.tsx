import type { ReactNode } from "react";
import styles from "./ModalContent.module.css";
import {
  joinClassNames,
  MODAL_CONTENT_HEIGHT,
  MODAL_CONTENT_WIDTH,
} from "@shared";
import { normalizePercentSize } from "../../utils";

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

  return (
    <div
      className={classNames}
      style={{
        width: `${normalizePercentSize(width)}`,
        height: `${normalizePercentSize(height)}`,
      }}
    >
      <div className={styles["modal__content__wrapper"]}>{children}</div>
    </div>
  );
};

export default ModalContent;
