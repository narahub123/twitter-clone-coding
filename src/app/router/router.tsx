import { Modal } from "@shared";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <p>연습</p>
        <Modal id="practice">
          <Modal.Overlay />
          <Modal.Content height={50}>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
            <p>내용</p>
          </Modal.Content>
        </Modal>
      </>
    ),
  },
]);

export default router;
