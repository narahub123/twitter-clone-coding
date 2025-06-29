import { router, store } from "@app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "@shared/styles/reset.css";
import "@shared/styles/css-variables.css";
import "@shared/styles/design-system-variables.css";
import "@shared/styles/background-theme.css";
import "@shared/styles/color-theme.css";
import "@shared/styles/global.css";

import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
