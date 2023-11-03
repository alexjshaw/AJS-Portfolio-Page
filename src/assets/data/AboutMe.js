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

export const aboutMeWide = {
  details: [
    {
      id: 1,
      text: ` I'm Alex Shaw, a ${getAge()} year old full stack developer from Bristol, England. `,
      icon: "👨🏻",
    },
    {
      id: 2,
      text: `
              I studied Mathematics and Electronic Engineering at University, receiving my
              bachelor's degree in 2019, and in 2023 graduated from a full time, six month
              bootcamp with Boolean UK, studying to become a Full Stack Developer.
            `,
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: ` 
              While studying with Boolean we learnt a range of core Front and Back End
              technologies including JavaScript, HTML, CSS, React, Node, Express, JWT,
              Jasmine, Prisma, PostgreSQL and RESTful APIs.
            `,
      icon: "🖥️",
    },
    {
      id: 4,
      text: `
              In my own time I have self taught tools including Vite, MongoDB, Auth0,
              Formik, Framer Motion, Jotai and worked with Mantine & Material-UI.
              At present I'm working on learning TypeScript and Next.js.
            `,
      icon: "🗒️",
    },
    {
      id: 5,
      text: `
              My aim is to continue pushing myself out of my comfort zone, and look for new
              tools, technologies and languages to expand my knowledge and continue to grow
              as a developer.
            `,
      icon: "🎯",
    }
  ],
}

const aboutMeNarrow = {
  details: [
    {
      id: 1,
      text: `
              I'm Alex Shaw, a ${getAge()} year old full stack developer
              from Bristol, England.
            `,
      icon: "👨🏻",
    },
    {
      id: 2,
      text: `
              I studied Mathematics and Electronic Engineering at
              University, receiving my bachelor's degree in 2019,
              and in 2023 graduated from a full time, six month
              bootcamp with Boolean UK, studying to become a Full
              Stack Developer.
            `,
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: ` 
              While studying with Boolean we learnt a range of
              core Front and Back End technologies including
              JavaScript, HTML, CSS, React, Node, Express, JWT,
              Jasmine, Prisma, PostgreSQL and RESTful APIs.
            `,
      icon: "🖥️",
    },
    {
      id: 4,
      text: `
              In my own time I have self taught tools including
              Vite, MongoDB, Auth0, Formik, Framer Motion, Jotai
              and worked with Mantine & Material-UI. At present
              I'm working on learning TypeScript and Next.js.
            `,
      icon: "🗒️",
    },
    {
      id: 5,
      text: `
              My aim is to continue pushing myself out of my
              comfort zone, and look for new tools, technologies
              and languages to expand my knowledge and continue to
              grow as a developer.
            `,
      icon: "🎯",
    }
  ],
}

export const aboutCodeNarrow = `import Alex from "@alex/core"

export default function AboutMe() {
  return (
    <Alex ${aboutMeNarrow.details.map(
      (item) =>
        `
      ${item.icon} = {${item.text}}`
    )}
    />
  );
}`;

export const aboutCodeWide = `import Alex from "@alex/core"

export default function AboutMe() {
  return (
    <Alex ${aboutMeWide.details.map(
      (item) =>
        `
      ${item.icon} = {${item.text}}`
    )}
    />
  );
}`;