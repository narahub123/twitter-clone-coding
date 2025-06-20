import { Modal } from "@shared";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <p>연습</p>
        <Modal id="practice">모달</Modal>
      </>
    ),
  },
]);

export default router;
