import styles from "./ModalOverlay.module.css";
import { joinClassNames, MODAL_OVERLAY_OPACITY } from "@shared";
import { clampOpacity } from "@shared/ui/Modal";

interface ModalOverlayProps {
  className?: string;
  opacity?: number;
}

const ModalOverlay = ({
  className,
  opacity = MODAL_OVERLAY_OPACITY,
}: ModalOverlayProps) => {
  const classNames = joinClassNames([styles["modal__overlay"], className]);

  return (
    <div
      className={classNames}
      style={{ backgroundColor: `rgba(0, 0, 0, ${clampOpacity(opacity)})` }}
    />
  );
};

export default ModalOverlay;
