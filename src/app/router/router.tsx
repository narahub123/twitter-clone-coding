import { ButtonStyleGuide } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ButtonStyleGuide />
      </>
    ),
  },
]);

export default router;
