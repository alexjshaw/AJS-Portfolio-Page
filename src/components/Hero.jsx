import { Group, Center, Box } from "@mantine/core"
import { m } from "framer-motion";
import Typewriter from "typewriter-effect";

import classes from "./Hero.module.css"

function MotionContainer ({
  animate,
  action = false,
  children,
  component,
  ...other
}) {
  if (action) {
    return (
      <Box
        component={component}
        initial={false}
        animate={animate ? "animate" : "exit"}
        // variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={component}
      initial="initial"
      animate="animate"
      exit="exit"
      // variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}

function TypedText() {
  return (
    <Typewriter
      options={{
        strings: ["Software Engineer", "Data Engineer", "OS Contributor"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

const titleText = ["Hello,", "_", "I'm"]

export default function Hero() {
  return (
    <Group>
      <Center>
        <Box className={classes.heroBox}>
          <MotionContainer
            component={m.h3}
            className={classes.greeting}
          >
                {titleText.map((text) =>
                  text.split("").map((letter, index) =>
                    letter === "_" ? (
                      <span key={index}>&nbsp;</span>
                    ) : (
                      <m.span key={index} variants={getVariant("slideInUp")}>
                        {letter}
                      </m.span>
                    )
                  )
                )}
          </MotionContainer>
        </Box>
      </Center>
    </Group>
  )
}