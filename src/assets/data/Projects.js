import ArchersToolkitLandingDark from "../projectImages/ArchersToolkitLandingDark.webp"
import ArchersToolkitLandingLight from "../projectImages/ArchersToolkitLandingLight.webp"

export const projects = [
  {
    name: "AJS-Portfolio-Page",
    title: "My Portfolio",
    intro: [
      "While I'm sure using my portfolio as one of my demonstration projects is unorthadox, this is one of the first substantial projects I've worked on since completing my Full Stack Bootcamp and as such feels important.",
      "The development of this site has been treated as an opportunity to get hands on with some new tools and methods that I haven't previously used, and going in to more depth with things I'd already touched upon.",
      "This has included the concept of Lazy Loading to speed up the initial page load, Framer Motion to introduce some animations, css modules for styling, building for light and dark colour schemes, and getting more practice with Mantine and using hooks more extensively."
    ],
    tech: [
      "JavaScript",
      "React",
      "React Router",
      "Vite",
      "Mantine",
      "Framer Motion",
      "PostCSS",
      "ESLint"
    ],
    subSections: [],
  },
  {
    name: "Archers-Toolkit-Frontend",
    title: "Archers Toolkit",
    intro: [
      "Archers Toolkit is a project that was borne out of annoyance. Annoynance at the fact that in the 20+ years I've been involved in the sport of Archery, I am yet to find an app that I believe is truly fit for purpose. Most commonly they are too complicated for novices, or too simple for experienced archers, lacking in features and with clunky, unintuitive design.",
      "Archers Toolkit is my attempt to address that. To build a website that offers a broad feature set, a clean and intuitive user interface, and is accessible to archers of all standards. At the same time it is an opportunity to get hands on with new tools and technologies and further my own learning."
    ],
    tech: [
      "JavaScript",
      "React",
      "React Router",
      "React Hook Form",
      "Auth0",
      "Zod",
      "Mantine",
      "PostCSS",
      "ESLint",
      "CORS",
      "Express",
      "MongoDB",
      "Mongoose",
      "Helmet",
      "Morgan"
    ],
    subSections: [
      {
        title: "Authentication",
        description: "First and foremost comes a robust authentication system. Built using Auth0 to handle user authentication amd protecting routes from non-logged in visitors, and JWT to prevent unauthorized actions in the database",
        images: [ArchersToolkitLandingDark, ArchersToolkitLandingLight]
      }
    ],
  },
  {
    name: "ajs-individual-frontend",
    subSections: [
      {
        title: "Title frontend 1",
        description: "Description Archers 1",
        images: []
      },
      {
        title: "Title frontend 2",
        description: "Description Archers 2",
        images: []
      },
      {
        title: "Title frontend 3",
        description: "Description Archers 3",
        images: []
      }
    ],
  }
];