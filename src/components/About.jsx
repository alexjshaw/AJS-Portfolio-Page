/* eslint-disable react/display-name */
import { forwardRef } from "react";
import {
  Container,
  Group,
  Text,
  Title,
  Box,
  useMantineColorScheme
} from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import classes from "./About.module.css"
import { useEffect } from "react";

import hljs from "highlight.js/lib/core";
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript);


const BoxWrapper = forwardRef(
  ({ children, align, withBackground, ...props }, ref) => {
    return (
      <Box
        className={classes.boxWrapper}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

function getAge() {
  const tempBirthDate = new Date("1990-10-23");
  const tempToday = new Date();
  let age = tempToday.getFullYear() - tempBirthDate.getFullYear();
  const month = tempToday.getMonth() - tempBirthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && tempToday.getDate() < tempBirthDate.getDate())
  ) {
    age--;
  }
  return age;
}

// const aboutMe = {
//   title: "A little bit about myself",
//   details: [
//     {
//       id: 1,
//       text: ` I'm Alex Shaw, a ${getAge()} years old developer, from Bristol, England. `,
//       icon: "🧔🏻",
//     },
//     {
//       id: 2,
//       text: ` I studied Mathematics and Electronic Engineering at University, receiving my bachelor's degree in 2019, and in 2023 graduated from a full time, six month bootcamp with Boolean UK, studying to become a Full Stack Developer. `,
//       icon: "🧑🏼‍🎓",
//     },
//     {
//       id: 3,
//       text: ` I love the challenge that coding provides, always pushing me to step outside of my comfort zone, to learn new languages, tools and techniques.
//               My aim is always to look for ways that I can improve as a coder,  develop a deeper understanding, and push myself to be better every day. `,
//       icon: "🎯",
//     },
//     {
//       id: 4,
//       text: " I'm confident working with JS",
//       icon: "💻",
//     },
//     {
//       id: 5,
//       text: `
//               My field of Interest are building new  Web Technologies and Products and also in 
//               areas related Mobile application and Natural Language Processing.
//            `,
//       icon: "🔎",
//     },
//     {
//       id: 6,
//       text: `
//               whenever possible, i also apply my passion for developing products with multiple 
//               different frameworks and technologies, like Django, React, Angular, Vite, Redux, Node.js ...
//            `,
//       icon: "💭",
//     },
//   ],
// };

const aboutMe = {
  title: "Let me introduce myself",
  details: [
    {
      id: 1,
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim lorem, rutrum vitae nunc ultrices, iaculis vestibulum metus. Suspendisse potenti. `,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim lorem, rutrum vitae nunc ultrices, iaculis vestibulum metus. Suspendisse potenti. `,
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim lorem, rutrum vitae nunc ultrices, iaculis vestibulum metus. Suspendisse potenti. `,
      icon: "🎯",
    },
    {
      id: 4,
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt ipsum vitae. ",
      icon: "💻",
    },
    {
      id: 5,
      text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vestibulum odio. Morbi in lorem eget tellus faucibus dictum non eget lectus. Sed maximus eros a efficitur semper. Aliquam lorem.
           `,
      icon: "🔎",
    }
  ],
};

const aboutMeCode = `import Alex from "@alex/core"

export default function AboutMe() {
  return (
    <Alex ${aboutMe.details.map(
      (item) =>
        `
      ${item.icon} = {${item.text}}`
    )}
    />
  );
}`;

export default function About() {
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    
    linkElement.href = colorScheme === 'dark'
      ? '/github-dark-dimmed.css'
      : '/github.css';
  
    document.head.appendChild(linkElement);
  
    document.querySelectorAll('pre code').forEach((block) => {
      if (!block.dataset.highlighted) {
        hljs.highlightElement(block);
        block.dataset.highlighted = true;
      }
    });
  
    return () => {
      document.head.removeChild(linkElement);
    };
  }, [colorScheme]);
  
  
  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
        <Group mb={25}>
          <Title
            order={1}
            className={classes.title}
          >
            {aboutMe.title}
          </Title>
        </Group>
        <pre className={classes.codeBlock}><code className="language-javascript">
          {aboutMeCode}
        </code></pre>
      </BoxWrapper>
    </Container>
  )
}