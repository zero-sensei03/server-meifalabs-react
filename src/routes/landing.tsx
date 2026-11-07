import type { RouteObject } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import("@/components/layouts/landing"));
const Home = lazy(() => import("@/pages/landing-page/home"));

const landingRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default landingRoutes;
