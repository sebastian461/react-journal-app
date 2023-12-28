import React from "react";
import ReactDOM from "react-dom/client";
//import "./styles.css";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppTheme>
      <RouterProvider router={AppRouter} />
    </AppTheme>
  </React.StrictMode>
);
