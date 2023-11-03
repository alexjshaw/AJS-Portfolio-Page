/* eslint-disable react/display-name */
import { useState, useEffect } from "react";
import {
  Container,
  Group,
  Text,
  Title,
  Box,
  Switch,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "./About.module.css";
import { Code, CodeOff } from "tabler-icons-react";
import {
  aboutCodeNarrow,
  aboutCodeWide,
  aboutMeWide,
} from "../assets/data/AboutMe";
import { useMediaQuery } from "@mantine/hooks";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const aboutMeTitle = "A little bit about myself";

export default function About() {
  const { colorScheme } = useMantineColorScheme();
  const [codeView, setCodeView] = useState(true);
  const narrowView = useMediaQuery("(max-width: 48em)");

  useEffect(() => {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.type = "text/css";

    linkElement.href =
      colorScheme === "dark" ? "/github-dark-dimmed.css" : "/github.css";

    document.head.appendChild(linkElement);

    document.querySelectorAll("pre code").forEach((block) => {
      if (!block.dataset.highlighted) {
        hljs.highlightElement(block);
        block.dataset.highlighted = true;
      }
    });

    return () => {
      document.head.removeChild(linkElement);
    };
  }, [colorScheme, narrowView, codeView]);

  const AboutNoCode = () => (
    <>
      {aboutMeWide.details.map((item, index) => (
        <div key={index}>
          <Text size="lg" key={item.id} className="text" mt={5}>
            <span style={{ marginRight: 5 }}>{item.icon}</span>
            {item.text}
          </Text>
        </div>
      ))}
    </>
  );

  return (
    <Container px="xl" size="lg">
      <Box className={classes.aboutBox}>
        <Group justify="space-between" mb={25}>
          <Title order={1} className={classes.title}>
            {aboutMeTitle}
          </Title>
          <Switch
            label={codeView ? "Code On" : "Code Off"}
            checked={codeView}
            onChange={() => setCodeView(!codeView)}
            visibleFrom="sm"
            onLabel={<Code className={classes.codeLabel} />}
            offLabel={<CodeOff className={classes.codeOffLabel} />}
            color="violet"
            size="lg"
          />
        </Group>
        {!narrowView ? (
          codeView ? (
            <>
              <Container px={0} className={classes.codeNarrow}>
                <pre className={classes.codeBlock}>
                  <code className="language-javascript">{aboutCodeNarrow}</code>
                </pre>
              </Container>
              <Container px={0} className={classes.codeWide}>
                <pre className={classes.codeBlock}>
                  <code className="language-javascript">{aboutCodeWide}</code>
                </pre>
              </Container>
            </>
          ) : (
            <AboutNoCode />
          )
        ) : (
          <AboutNoCode />
        )}
      </Box>
    </Container>
  );
}
