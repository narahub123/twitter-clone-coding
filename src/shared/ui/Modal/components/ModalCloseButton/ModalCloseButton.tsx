import {
  useLanguageContent,
  Icon,
  type PlacementType,
  Constants,
} from "@shared";
import { getPlacementOffset, useModalContext } from "@shared/ui/Modal";

interface ModalCloseButtonProps {
  className?: string;
  placement?: PlacementType;
  offsetX?: number | string;
  offsetY?: number | string;
}

const ModalCloseButton = ({
  className,
  placement = Constants.MODAL_CLOSE_BUTTON_PLACEMENT as PlacementType,
  offsetX = Constants.MODAL_CLOSE_BUTTON_OFFSET_X,
  offsetY = Constants.MODAL_CLOSE_BUTTON_OFFSET_Y,
}: ModalCloseButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["common", "ModalCloseButton"]);

  const { onClose } = useModalContext();

  return (
    <Icon
      iconName="close"
      title={title}
      className={className}
      style={{
        position: "absolute",
        ...getPlacementOffset(placement, offsetX, offsetY),
      }}
      onClick={onClose}
    />
  );
};

export default ModalCloseButton;
