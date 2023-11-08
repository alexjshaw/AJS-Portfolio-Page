// RepoModal.js
import React from 'react';
import {
  Text,
  Title,
  Container,
  List,
  Group,
  Button
} from '@mantine/core';
import { projects } from '../assets/data/Projects';
import classes from "./RepoModal.module.css"

const RepoModal = ({ repo, handleRepoClick }) => {

  const project = projects.find((p) => p.name === repo.name);

  return (
    <Container>
      <Title className={classes.title} order={2}>{project.title}</Title>
      <Group mb={10}>
      {project.intro.map((paragraph, index) => (
        <Text key={index}>{paragraph}</Text>
      ))}
      </Group>
      <Title className={classes.title} order={2}>Tech</Title>
        <List mb={10}>
          {project.tech.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      {project && project.subSections.map((subSection, index) => (
        <React.Fragment key={index}>
          <Title order={3}>{subSection.title}</Title>
          <Text>{subSection.description}</Text>
        </React.Fragment>
      ))}
      <Button className={classes.button} onClick={(event) => handleRepoClick(event, repo.svn_url)}>View Repo</Button>
    </Container>
  );
};

export default RepoModal;

/*
What does each page need to contain?
Introduction/Background
Tech Stack
Screenshots of various sections
*/