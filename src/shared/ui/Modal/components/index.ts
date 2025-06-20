import ModalContainer from "./ModalContainer";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";

const Modal = Object.assign(ModalContainer, {
  Overlay: ModalOverlay,
  Content: ModalContent,
});

export default Modal;
