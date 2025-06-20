import { useLanguageContent, Icon, type PlacementType } from "@shared";
import { getPlacementOffset } from "../../utils";

interface ModalCloseButtonProps {
  className?: string;
  placement?: PlacementType;
  offsetX?: number | string;
  offsetY?: number | string;
}

const ModalCloseButton = ({
  className,
  placement = "top-right",
  offsetX = "16px",
  offsetY = "16px",
}: ModalCloseButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["common", "ModalCloseButton"]);

  return (
    <Icon
      iconName="close"
      title={title}
      className={className}
      style={{
        position: "absolute",
        ...getPlacementOffset(placement, offsetX, offsetY),
      }}
      onClick={() => {}}
    />
  );
};

export default ModalCloseButton;
