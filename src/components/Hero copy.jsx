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
  hidden: { y: 50, opacity: 0 }, // Start lower down, increase this value if you want a larger slide
  visible: (custom) => ({
    y: 0, // End at the natural position of the letter
    opacity: 1,
    transition: {
      delay: custom * 0.2, // Delay each letter based on its index
      type: 'spring',
      stiffness: 500,
      damping: 1, // Adjust damping for a bit of bounce, if desired
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
    >
      {letter}
    </motion.span>
  )
};

const titleText = ["Hi,", "_", "I'm"]
const text = "Hello, I'm"
const myName = "Alex Shaw"

export default function Hero() {
  return (
    <Group>
      <Center>
        <Box className={classes.heroBox}>
          {text.split('').map((letter, index) => (
            // Render each letter as an animated component
            <AnimatedLetter key={index} letter={letter} index={index} />
          ))}
          {/* <MotionContainer
            component={m.h3}
            className={classes.greeting}
          >
                {titleText.map((text) =>
                  text.split("").map((letter, index) =>
                    letter === "_" ? (
                      <span key={index}>&nbsp;</span>
                    ) : (
                      <m.span key={index} >
                        {letter}
                      </m.span>
                    )
                  )
                )}
            </MotionContainer>
            <m.div>
              <m.h2
                animate={{
                  backgroundPosition: "200%",
                }}
                transition={{
                  repeatType: "reverse",
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                }}
                className={classes.gradientText}
              >
                {myName}
              </m.h2>
            </m.div> */}
        </Box>
      </Center>
    </Group>
  )
}