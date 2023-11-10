import { useEffect } from "react";
import About from "../components/About";
import PageLayout from "../layouts/PageLayout"
import { useActiveLink } from "../context/ActiveLinkContext";

export default function AboutPage() {
  const { setActive } = useActiveLink()
  
  useEffect(() => {
    setActive("/about")
  }, [setActive])

  return (
    <PageLayout title="About me">
      <About />
    </PageLayout>
  );
}
