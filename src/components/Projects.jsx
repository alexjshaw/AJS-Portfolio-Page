import { useEffect, useState } from "react";
// Mantine
import {
  Box,
  Container,
  Grid,
  Group,
  Text,
  Title,
  Button,
  Badge,
} from "@mantine/core";
import classes from "./Projects.module.css";
import { BrandGithub } from "tabler-icons-react";

const ReposToDisplay = [
  "AJS-Portfolio-Page",
  "Archers-Toolkit-Frontend",
  "ajs-individual-frontend",
];
const title = "Projects"
const description = "A small selection of projects I've worked on, both throughout my time studying on the Boolean Bootcamp and in my own time."

const getTagColor = (type) => {
  type = type.toLowerCase();
  if (type === "rails" || type === "ruby") {
    return "red";
  } else if (type === "react") {
    return "cyan";
  } else if (type === "javascript") {
    return "yellow";
  } else if (type === "typescript") {
    return "blue";
  } else if (type === "css") {
    return "grape";
  } else if (type === "python") {
    return "#4584b6";
  } else if (type === "php") {
    return "grape";
  }
};

export default function Skills() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("https://api.github.com/users/alexjshaw/repos");
      const data = await res.json();
      const filteredRepos = [];
      ReposToDisplay.forEach((repoName) => {
        const matchingRepo = data.find((repo) => repo.name === repoName);
        if (matchingRepo) {
          filteredRepos.push(matchingRepo);
        }
      });

      setRepos(filteredRepos);
    };
    fetchProjects();
  }, []);

  const handleRepoClick = (event, link) => {
    window.open(link);
    event.stopPropagation();
  };

  return (
    <Container px="xl" size="lg">
      <Box className={classes.projectsBox}>
        <Title className={classes.title} order={1}>
          {title}
        </Title>
        <Text className={classes.subtitle}>
          {description}
        </Text>
        <Grid>
          {repos.map((repo, index) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
              <Box className={classes.projectCard}>
                <Group>
                  <Group>
                    <Group>
                      <BrandGithub />
                      <Text size="md">{repo.name}</Text>
                    </Group>
                    <Group>
                      {repo.language && (
                        <Badge color={getTagColor(repo.language)} size="md">
                          <Text size="xs">{repo.language}</Text>
                        </Badge>
                      )}
                    </Group>
                  </Group>

                </Group>
                <Text lineClamp={3} py={12}>
                    <Text size="xs">{repo.description}</Text>
                  </Text>
                <Group>
                    <Button
                      onClick={(event) => handleRepoClick(event, repo.svn_url)}
                    >
                      View Repo
                    </Button>
                    <Button>More Info</Button>
                  </Group>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
