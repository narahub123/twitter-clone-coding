import {
  Button,
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
import { useRef } from "react";

const ModalTestPage = () => {
  const classNames = joinClassNames([styles["modal__test__page"]]);
  const dispatch = useAppDispatch();
  const btnRef = useRef<HTMLButtonElement>(null);

  const isOpen = useAppSelector(selectStandAlonModalState("test"));

  const onOpen = () => {
    dispatch(onStandAloneOpen("test"));
  };

  const onClose = () => {
    dispatch(onStandAloneClose("test"));

    setTimeout(() => {
      btnRef.current?.focus();
    }, 100);
  };

  return (
    <div className={classNames}>
      <Button onClick={onOpen} title="열기" ref={btnRef}>
        열기
      </Button>
      <Modal id="test" isOpen={isOpen} onClose={onClose} firstFocusIndex={0}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>헤더</Modal.Header>
          <Modal.Body>
            <input type="text" />
            <Button title="버튼">버튼</Button>
          </Modal.Body>
          <Modal.Footer>푸터</Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ModalTestPage;
