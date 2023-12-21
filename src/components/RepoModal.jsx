/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Text,
  Title,
  Container,
  Group,
  Button,
  Grid,
  Image,
  Stack
} from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import { projects } from "../assets/data/Projects";
import { Carousel } from "@mantine/carousel";
import classes from "./RepoModal.module.css";

const ImageRotator = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const narrowView = useMediaQuery('(max-width: 62em)')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <img
      src={images[currentImageIndex]}
      alt={`Slide ${currentImageIndex}`}
      style={{
        maxWidth: "100%",
        display: "block",
        marginLeft: "auto",
        marginRight: narrowView ? "auto" : "0",
        maxHeight: "350px",
      }}
    />
  );
};

const RepoModal = ({ repo, handleRepoClick }) => {
  const project = projects.find((p) => p.name === repo.name);
  const narrowView = useMediaQuery('(max-width: 62em)')

  const carouselSlides = project.gallery.map((imageSrc, index) => (
    <Carousel.Slide key={index}>
      <Image
        src={imageSrc}
        alt={`Gallery image ${index}`}
        style={{ maxHeight: "350px", width: "auto", maxWidth: "100%" }}
        fit="contain"
      />
    </Carousel.Slide>
  ));

  return (
    <Container fluid>
      <Title className={classes.title} order={2}>
        {project.title}
      </Title>
      <Stack mb={10}>
        {project.intro.map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
      </Stack>
      <Title className={classes.title} order={2}>
        Tech
      </Title>
      <Grid mb={10}>
        {project.tech.map((item, index) => (
          <Grid.Col span={2} key={index}>
            {" "}
            <Text>{item}</Text>
          </Grid.Col>
        ))}
      </Grid>
      {project && project.subSections.length > 0 && (
        <Title order={2} className={classes.title}>
          Features
        </Title>
      )}
            {project &&
  project.subSections.map((subSection, index) => (
    <Grid key={index} mt={10} mb={10}>
      {narrowView && (
        <>
          <Grid.Col span={12}>
            <Title order={4} mb={4}>{subSection.title}</Title>
            {subSection.description.map((desc, descIndex) => (
              <Text key={descIndex}>{desc}</Text>
            ))}
          </Grid.Col>
          <Grid.Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
            {subSection.images && subSection.images.length > 0 && (
              <ImageRotator images={subSection.images} />
            )}
          </Grid.Col>
        </>
      )}

      {!narrowView && (
        <>
          {index % 2 === 0 && (
            <Grid.Col span="auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Title order={4} mb={4}>{subSection.title}</Title>
              {subSection.description.map((desc, descIndex) => (
                <Text key={descIndex}>{desc}</Text>
              ))}
            </Grid.Col>
          )}
          <Grid.Col
            span={5}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {subSection.images && subSection.images.length > 0 && (
              <ImageRotator images={subSection.images} />
            )}
          </Grid.Col>
          {index % 2 !== 0 && (
            <Grid.Col span="auto" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Title order={4} mb={4}>{subSection.title}</Title>
              {subSection.description.map((desc, descIndex) => (
                <Text key={descIndex}>{desc}</Text>
              ))}
            </Grid.Col>
          )}
        </>
      )}
    </Grid>
  ))}
      {project && project.gallery.length > 0 && (
        <Group mb={10}>
          <Title className={classes.title} order={2}>
            Gallery
          </Title>
          <Carousel
            slideSize="auto"
            align="start"
            slideGap="md"
            controlsOffset="xs"
            controlSize={25}
            height={350}
            withIndicators
          >
            {carouselSlides}
          </Carousel>
        </Group>
      )}
      <Button
        className={classes.button}
        onClick={(event) => handleRepoClick(event, repo.svn_url)}
      >
        View Repo
      </Button>
    </Container>
  );
};

export default RepoModal;
