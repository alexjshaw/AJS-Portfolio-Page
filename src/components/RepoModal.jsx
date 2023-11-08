/* eslint-disable react/prop-types */
// RepoModal.js
import React, { useState, useEffect } from 'react';
import {
  Text,
  Title,
  Container,
  List,
  Group,
  Button,
  Grid,
  Center
} from '@mantine/core';
import { projects } from '../assets/data/Projects';
import classes from "./RepoModal.module.css"

const ImageRotator = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
<img
      src={images[currentImageIndex]}
      alt={`Slide ${currentImageIndex}`}
      style={{ width: '100%', maxWidth: '100%', display: 'block', marginLeft: 'auto', marginRight: '0' }}
    />
  );
};

const RepoModal = ({ repo, handleRepoClick }) => {

  const project = projects.find((p) => p.name === repo.name);

  return (
    <Container fluid>
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
      {project && project.subSections.length > 0 && (
        <Title order={2} className={classes.title}>Features</Title>
        )}
      {project && project.subSections.map((subSection, index) => (
        <Grid key={index}>
        <Grid.Col span="auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Title order={4} mb={4}>{subSection.title}</Title>
          <Text>{subSection.description}</Text>
        </Grid.Col>
        <Grid.Col span={5}>
          {subSection.images && subSection.images.length > 0 && (
            <ImageRotator images={subSection.images} />
          )}
        </Grid.Col>
      </Grid>
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