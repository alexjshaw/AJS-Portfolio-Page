import { useEffect } from "react";
import Contact from "../components/Contact";
import PageLayout from "../layouts/PageLayout"
import { useActiveLink } from "../context/ActiveLinkContext";

export default function ContactPage() {
  const { setActive } = useActiveLink()
  
  useEffect(() => {
    setActive("/contact")
  }, [setActive])

  return (
    <PageLayout title="Contact me">
      <Contact />
    </PageLayout>
  );
}
