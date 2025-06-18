import IconStyleGuide from "@pages/style-guides/IconStyleGuide/IconStyleGuide";
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
