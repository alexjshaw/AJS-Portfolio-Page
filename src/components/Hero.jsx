import { Group, Center, Box } from "@mantine/core"
import { motion } from "framer-motion";
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

const letterVariants = {
  hidden: { y: 20, opacity: 0 }, // Start from below the final position
  visible: (custom) => ({
    y: 0, // Animate to the final position
    opacity: 1,
    transition: {
      delay: custom * 0.1, // Delay each letter based on its index
      type: 'spring',
      stiffness: 250,
      damping: 25,
    },
  }),
};

const AnimatedLetter = ({ letter, index }) => {
  return (
    <motion.span
      custom={index}
      initial="hidden"
      animate="visible"
      variants={letterVariants}
      style={{ display: 'inline-block' }} // Make sure each letter is treated as a separate block for individual animation
    >
      {letter}
    </motion.span>
  );
};


const titleText = ["Hi,", "_", "I'm"]
const text = "Hello, I'm"
const myName = "Alex Shaw"

export default function Hero() {
  return (
    <Group>
      <Center>
        <Box className={classes.heroBox}>
          <Box className={classes.greeting}>
          {text.split('').map((letter, index) => letter === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <AnimatedLetter key={index} letter={letter} index={index} />
          ))}
          </Box>
        </Box>
      </Center>
    </Group>
  )
}