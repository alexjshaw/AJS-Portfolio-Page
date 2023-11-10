import { useEffect } from "react";
import Skills from "../components/Skills";
import PageLayout from "../layouts/PageLayout"
import { useActiveLink } from "../context/ActiveLinkContext";

export default function SkillsPage() {
  const { setActive } = useActiveLink()
  
  useEffect(() => {
    setActive("/skills")
  }, [setActive])

  return (
    <PageLayout title="Skills">
      <Skills />
    </PageLayout>
  );
}
