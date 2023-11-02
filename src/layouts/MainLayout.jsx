import { useDisclosure } from '@mantine/hooks';
import { AppShell, UnstyledButton } from '@mantine/core';
// import { MantineLogo } from '@mantine/ds';
import classes from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';
import { MainHeader } from './MainHeader';

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Skills",
    link: "/skills",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export function MainLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >

      <MainHeader opened={opened} toggle={toggle} links={links} />

      <AppShell.Navbar py="md" px={4} className={classes.navbar}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar>

        <Outlet />

    </AppShell>
  );
}
