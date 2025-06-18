import { Button } from "@shared";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Button>버튼</Button>
      </>
    ),
  },
]);

export default router;
