import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { AppShell, ActionIcon } from "@mantine/core";

import { motion } from "framer-motion";

import classes from "./MainLayout.module.css";
import { MainHeader } from "./MainHeader";
import { MainFooter } from "./MainFooter";
import { socialLinks } from "../assets/data/SocialLinks";
import { links } from "../assets/data/NavLinks";
import { useActiveLink } from "../context/ActiveLinkContext";

export function MainLayout() {
  const [opened, { toggle, close }] = useDisclosure();
  const navigate = useNavigate();
  const navbarBreakpoint = useMediaQuery("(min-width: 48em)");
  const { active, setActive } = useActiveLink()

  useEffect(() => {
    if (navbarBreakpoint && opened) {
      close();
    }
  }, [navbarBreakpoint]);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActive(link);
    navigate(link);
    close();
  };

  const linkItems = links.map((link) => (
    <motion.a
      whileHover={opened ? { scaleY: 1.2 } : { scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      key={link.label}
      aria-label={link.label}
      href={link.link}
      className={`${classes.link} ${
        link.link === active ? classes.linkActive : ""
      }`}
      onClick={(e) => handleLinkClick(e, link.link)}
    >
      {link.label}
    </motion.a>
  ));

  const socialLinkItems = socialLinks.map((link) => (
    <ActionIcon
      key={link.label}
      aria-label={link.label}
      href={link.link}
      className={classes.socialLink}
      component="a"
      size="lg"
      ml={15}
      radius="md"
      target="_blank"
      style={{ "--social-link-color": link.color }}
    >
      <link.icon size={28} />
    </ActionIcon>
  ));

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
      <MainHeader
        opened={opened}
        toggle={toggle}
        socialLinkItems={socialLinkItems}
        linkItems={linkItems}
      />
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        {linkItems}
      </AppShell.Navbar>
      <AppShell.Main className={classes.main}>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <MainFooter socialLinkItems={socialLinkItems} />
      </AppShell.Footer>
    </AppShell>
  );
}
