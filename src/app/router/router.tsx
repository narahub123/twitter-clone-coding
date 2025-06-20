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
          <Modal.Content width={"abc"}>컨텐츠</Modal.Content>
        </Modal>
      </>
    ),
  },
]);

export default router;
