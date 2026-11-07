import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import landingRoutes from "./routes/landing";
import AuthRouter from "./routes/auth";

const NFPage = lazy(() => import("@/pages/errors/PageNotFound"));

const router = createBrowserRouter([
  ...landingRoutes,
  ...AuthRouter,
  {
    path: "*",
    element: <NFPage />,
  },
]);

export default router;
