import { DescriptionStyleGuide } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <DescriptionStyleGuide />
      </>
    ),
  },
]);

export default router;
