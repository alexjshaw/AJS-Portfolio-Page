import { AppShell, Burger, Group, Container } from "@mantine/core";
import classes from "./MainHeader.module.css";
import { ActionToggle } from "../components/utility/ActionToggle";

export function MainHeader({ opened, toggle, socialLinkItems, linkItems }) {

  return (
    <AppShell.Header className={classes.root}>
      <Container className={classes.header}>
          <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
          <Group
            className={classes.socialLinks}
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
