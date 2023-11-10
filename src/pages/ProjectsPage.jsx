import { useEffect } from "react";
import Projects from "../components/Projects";
import PageLayout from "../layouts/PageLayout"
import { useActiveLink } from "../context/ActiveLinkContext";

export default function ProjectsPage() {
  const { setActive } = useActiveLink()
  
  useEffect(() => {
    setActive("/projects")
  }, [setActive])

  return (
    <PageLayout title="Projects">
      <Projects />
    </PageLayout>
  );
}
