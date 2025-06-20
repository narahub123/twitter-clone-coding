import ModalContainer from "./ModalContainer";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import ModalCloseButton from "./ModalCloseButton";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const Modal = Object.assign(ModalContainer, {
  Overlay: ModalOverlay,
  Content: ModalContent,
  CloseButton: ModalCloseButton,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
