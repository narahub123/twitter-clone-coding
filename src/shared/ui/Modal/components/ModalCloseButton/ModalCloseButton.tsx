import { useLanguageContent, Icon } from "@shared";

interface ModalCloseButtonProps {
  className?: string;
}

const ModalCloseButton = ({ className }: ModalCloseButtonProps) => {
  // 언어 설정
  const { title } = useLanguageContent(["common", "ModalCloseButton"]);

  return (
    <Icon
      iconName="close"
      title={title}
      className={className}
      onClick={() => {}}
    />
  );
};

export default ModalCloseButton;
