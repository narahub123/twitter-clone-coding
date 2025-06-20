import {
  ButtonStyleGuide,
  DescriptionStyleGuide,
  HeadingStyleGuide,
  IconStyleGuide,
  TextStyleGuide,
} from "@pages";
import ModalTestPage from "@shared/ui/Modal/_test/ModalTestPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/styles",
    children: [
      {
        path: "button",
        element: <ButtonStyleGuide />,
      },
      {
        path: "description",
        element: <DescriptionStyleGuide />,
      },
      {
        path: "heading",
        element: <HeadingStyleGuide />,
      },
      {
        path: "icon",
        element: <IconStyleGuide />,
      },
      {
        path: "text",
        element: <TextStyleGuide />,
      },
    ],
  },
  {
    path: "/test",
    children: [
      {
        path: "modal",
        element: <ModalTestPage />,
      },
    ],
  },
]);

export default router;
