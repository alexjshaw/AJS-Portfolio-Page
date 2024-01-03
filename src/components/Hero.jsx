import { Group, Center, Box, Title } from "@mantine/core"
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import classes from "./Hero.module.css"

function TypedText() {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack Developer", "Engineering Graduate", "Nerd"],
        autoStart: true,
        loop: true,
        delay: 60,
        deleteSpeed: 25,
      }}
    />
  );
}

const letterVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
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
      style={{ display: 'inline-block' }}
    >
      {letter}
    </motion.span>
  );
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const titleText = "Hello, I'm"
const myName = "Alex Shaw"

export default function Hero() {
  return (
    <Group>
      <Center>
        <Box className={classes.heroBox}>
          <Box className={classes.greeting}>
          {titleText.split('').map((letter, index) => letter === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <AnimatedLetter key={index} letter={letter} index={index} />
          ))}
          </Box>
          <motion.div variants={fadeIn} initial="initial" animate="animate">
            <motion.h2
              animate={{ backgroundPosition: ["0%", "200%"] }}
              transition={{
                repeatType: "reverse",
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              }}
              className={classes.gradientText}
            >
              {myName}
            </motion.h2>
          </motion.div>
          <Title className={classes.typed}>
              <TypedText />
          </Title>
        </Box>
      </Center>
    </Group>
  )
}