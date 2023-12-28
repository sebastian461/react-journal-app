import { createBrowserRouter } from "react-router-dom";
import { JournalApp } from "../JournalApp";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <JournalApp />,
    children: JournalRoutes,
  },
  {
    path: "auth",
    children: AuthRoutes,
  },
]);
