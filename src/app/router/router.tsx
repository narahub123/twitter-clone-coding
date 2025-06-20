import { Modal } from "@shared";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Modal>모달</Modal>
      </>
    ),
  },
]);

export default router;
