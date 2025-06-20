import {
  Button,
  FocusTrap,
  joinClassNames,
  Modal,
  useAppDispatch,
  useAppSelector,
} from "@shared";
import styles from "./ModalTestPage.module.css";
import {
  onStandAloneClose,
  onStandAloneOpen,
  selectStandAlonModalState,
} from "../model";

const ModalTestPage = () => {
  const classNames = joinClassNames([styles["modal__test__page"]]);
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectStandAlonModalState("test"));

  const onOpen = () => {
    dispatch(onStandAloneOpen("test"));
  };

  const onClose = () => {
    dispatch(onStandAloneClose("test"));
  };

  return (
    <div className={classNames}>
      <Button onClick={onOpen} title="열기">
        열기
      </Button>
      <FocusTrap>
        <Modal id="test" isOpen={isOpen} onClose={onClose}>
          <Modal.Overlay />
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>헤더</Modal.Header>
            <Modal.Body>바디</Modal.Body>
            <Modal.Footer>푸터</Modal.Footer>
          </Modal.Content>
        </Modal>
      </FocusTrap>
    </div>
  );
};

export default ModalTestPage;
