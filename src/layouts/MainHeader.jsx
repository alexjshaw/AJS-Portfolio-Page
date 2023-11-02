import { useState } from "react";
import { AppShell, Burger, Group, Container, ActionIcon } from "@mantine/core";
import classes from "./MainHeader.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { socialLinks } from "../assets/data/SocialLinks";
import { ActionToggle } from "../components/utility/ActionToggle";

export function MainHeader({ opened, toggle, links }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(links[0].link);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActive(link);
    navigate(link);
  };

  const linkItems = links.map((link) => (
    <motion.a
      whileHover={{ scale: 1.1 }}
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
    <AppShell.Header className={classes.root}>
      <Container className={classes.header}>
          <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
          <Group
            className={classes.socialLinks}
            spacing={0}
            position="right"
            mr={25}
          >
            {socialLinkItems}
          </Group>
          <Group spacing={5} className={classes.links}>
            {linkItems}
          </Group>
          <Group>
            <ActionToggle />
          </Group>
      </Container>
    </AppShell.Header>
  );
}
