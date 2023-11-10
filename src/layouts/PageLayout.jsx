/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Box, Center, Container } from "@mantine/core";
import { Helmet } from "react-helmet-async";
import classes from "./PageLayout.module.css"

const PageLayout = forwardRef(
  ({ children }, ref) => {
    return (
        <Container className={classes.pageContainer}>
          <Center className={classes.pageCenter}>
          {children}
          </Center>
        </Container>
    );
  }
);
export default PageLayout;