import { Text } from "@shared";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Text>연습</Text>
      </>
    ),
  },
]);

export default router;
