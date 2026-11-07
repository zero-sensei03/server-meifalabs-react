import { lazy } from "react";
import { type RouteObject } from "react-router";

const SignIn = lazy(() => import("@/pages/auth/sign-in"));

const AuthRouter: RouteObject[] = [
  {
    path: "/auth",
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default AuthRouter;
