import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";
import { Navigate } from "react-router-dom";

export const AppRouter = () => {
  const status = useCheckAuth();

  const routes =
    status === "authenticated"
      ? [
          {
            path: "/",
            children: JournalRoutes,
          },
        ]
      : status === "checking"
      ? [
          {
            path: "*",
            element: <CheckingAuth />,
          },
        ]
      : [
          {
            path: "auth",
            children: AuthRoutes,
          },
          {
            path: "/",
            element: <Navigate to="auth" />,
          },
        ];

  return routes;
};
