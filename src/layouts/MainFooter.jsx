import { Container, Group, Text } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import classes from "./MainFooter.module.css";

export function MainFooter({ socialLinkItems }) {
  const narrowView = useMediaQuery('(max-width: 62em)')
  
  return (
    <div className={classes.footerWrapper}>
      <Container className={classes.footerContent}>
        <Text size="sm">
          Copyright © 2023 alexjshaw. Source code available on{" "}
          <a
            href="https://github.com/alexjshaw/AJS-Portfolio-Page"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </Text>
        <Group
          className={classes.socialLinks}
          spacing={0}
        >
          {socialLinkItems}
        </Group>
      </Container>
    </div>
  );
}
