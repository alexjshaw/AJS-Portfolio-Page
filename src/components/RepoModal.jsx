// RepoModal.js
import React from 'react';
import {
  Text,
  Title,
  Container
} from '@mantine/core';

const RepoModal = ({ repo }) => {
  return (
    <Container>
      <Title order={2}>{repo.name}</Title>
      <Text>{repo.description}</Text>
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