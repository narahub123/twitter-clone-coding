import { IconStyleGuide } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <IconStyleGuide />
      </>
    ),
  },
]);

export default router;
