import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import FallbackLoader from "../components/utility/FallbackLoader";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: "", element: <LandingPage />}]
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
