import {
  ButtonStyleGuide,
  DescriptionStyleGuide,
  HeadingStyleGuide,
  IconStyleGuide,
  TextStyleGuide,
} from "@pages";
import { InputTestPage } from "@shared/ui/Input";
import ModalTestPage from "@shared/ui/Modal/_test/ModalTestPage";
import { TextEditorTestPage } from "@shared/ui/TextEditor";

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
      {
        path: "input",
        element: <InputTestPage />,
      },
      {
        path: "text-editor",
        element: <TextEditorTestPage />,
      },
    ],
  },
]);

export default router;
