import styles from "./ModalOverlay.module.css";
import { joinClassNames } from "@shared";

interface ModalOverlayProps {
  className?: string;
}

const ModalOverlay = ({ className }: ModalOverlayProps) => {
  const classNames = joinClassNames([styles["modal__overlay"], className]);

  return <div className={classNames}>ModalOverlay</div>;
};

export default ModalOverlay;
