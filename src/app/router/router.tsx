import {
  ButtonStyleGuide,
  DescriptionStyleGuide,
  HeadingStyleGuide,
  IconStyleGuide,
  TextStyleGuide,
} from "@pages";

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
]);

export default router;
