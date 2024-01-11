import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../ui";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, photoURL, displayName } = user;
      return dispatch(login({ uid, email, photoURL, displayName }));
    });
  }, []);

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
        ];

  return routes;
};
