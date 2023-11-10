/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Box, Center } from "@mantine/core";
import { Helmet } from "react-helmet-async";
import classes from "./PageLayout.module.css"

const PageLayout = forwardRef(
  ({ children }, ref) => {
    return (
      <Center ref={ref} mt={70} className={classes.pageCenter}>
        <Box className={classes.pageBox}>
          {children}
        </Box>
      </Center>
    );
  }
);
export default PageLayout;