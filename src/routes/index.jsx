import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import FallbackLoader from "../components/utility/FallbackLoader";

const Loadable = (Component) => {
  const LoadableComponent = () => (
    <Suspense fallback={<FallbackLoader />}>
      <Component />
    </Suspense>
  );

  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`;

  return LoadableComponent;
};

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: "", element: <LandingPage />}]
    },
    {
      path: '/about',
      element: <MainLayout />,
      children: [{ path: "", element: <AboutPage />}]
    },
    {
      path: '/skills',
      element: <MainLayout />,
      children: [{ path: "", element: <SkillsPage />}]
    },
    {
      path: '/projects',
      element: <MainLayout />,
      children: [{ path: "", element: <ProjectsPage />}]
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const AboutPage = Loadable(lazy(() => import("../pages/AboutPage")))
const SkillsPage = Loadable(lazy(() => import("../pages/SkillsPage")))
const ProjectsPage = Loadable(lazy(() => import("../pages/ProjectsPage")))