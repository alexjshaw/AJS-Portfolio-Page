/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Box } from "@mantine/core";
import classes from "./LandingSection.module.css"

const Section = forwardRef(({ children, isFirst, withBackground }, ref) => {

  const sectionClassName = `${classes.root} ${
    isFirst ? classes.firstSection : ''
  } ${withBackground ? classes.backgroundSection : ''}`;

  return (
    <Box
      className={sectionClassName}
    >
      {children}
    </Box>
  )
})

export default Section