import styles from "./ModalOverlay.module.css";
import {
  colorRGB,
  Constants,
  joinClassNames,
  type ColorSchemeType,
} from "@shared";
import { clampOpacity } from "@shared/ui/Modal";

interface ModalOverlayProps {
  className?: string;
  opacity?: number;
  bgColor?: ColorSchemeType;
}

const ModalOverlay = ({
  className,
  opacity = Constants.MODAL_OVERLAY_OPACITY,
  bgColor = Constants.COLOR_SCHEME_DEFAULT,
}: ModalOverlayProps) => {
  const classNames = joinClassNames([styles["modal__overlay"], className]);

  return (
    <div
      className={classNames}
      style={{
        backgroundColor: `rgba(${colorRGB[bgColor]}, ${clampOpacity(opacity)})`,
      }}
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default ModalOverlay;
