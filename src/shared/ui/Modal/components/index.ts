import ModalContainer from "./ModalContainer";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import ModalCloseButton from "./ModalCloseButton";

const Modal = Object.assign(ModalContainer, {
  Overlay: ModalOverlay,
  Content: ModalContent,
  CloseButton: ModalCloseButton,
});

export default Modal;
