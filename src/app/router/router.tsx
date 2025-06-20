import { TextStyleGuide } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <TextStyleGuide />
      </>
    ),
  },
]);

export default router;
