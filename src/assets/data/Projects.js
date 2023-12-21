import { Dashboard } from "tabler-icons-react"
import ArchersToolkitLandingDark from "../projectImages/ArchersToolkitLandingDark.webp"
import ArchersToolkitLandingLight from "../projectImages/ArchersToolkitLandingLight.webp"
import ArchersDashboardDark from "../projectImages/ArchersDashboardDark.webp"
import ArchersDashboardLight from "../projectImages/ArchersDashboardLight.webp"
import ArchersNewUserDark from "../projectImages/ArchersNewUserDark.webp"
import ArchersNewUserLight from "../projectImages/ArchersNewUserLight.webp"
import ArchersInProgressDark from "../projectImages/ArchersInProgressDark.webp"
import ArchersInProgressLight from "../projectImages/ArchersInProgressLight.webp"
import FrontWeather from "../projectImages/FrontWeather.webp"
import FrontServices from "../projectImages/FrontServices.webp"
import FrontLogin from "../projectImages/FrontLogin.webp"
import FrontLists from "../projectImages/FrontLists.webp"
import FrontListEdit from "../projectImages/FrontListEdit.webp"

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
    gallery: []
  },
  {
    name: "Archers-Toolkit-Frontend",
    title: "Archers Toolkit",
    intro: [
      "Archers Toolkit is a project that was borne out of annoyance. Annoynance at the fact that in the 20+ years I've been involved in the sport of Archery, I am yet to find an app that I believe is truly fit for purpose. Most commonly they are too complicated for novices, or too simple for experienced archers, lacking in features and with clunky, unintuitive design.",
      "Archers Toolkit is my attempt to address that. To build a website that offers a broad feature set, a clean and intuitive user interface, and is accessible to archers of all standards. At the same time it is an opportunity to get hands on with new tools and technologies and further my own learning.",
      "This project is very much a work in progress and will continue to evolve over the coming months."
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
        description: ["First and foremost comes a robust authentication system. Built using Auth0 to handle user authentication amd protecting routes from non-logged in visitors, and JWT to prevent unauthorized actions in the database."],
        images: [ArchersToolkitLandingDark, ArchersToolkitLandingLight]
      },
      {
        title: "Dashboard",
        description: [
          "New users are prompted to complete their profile, setting up their competitive profiles behind the scenes.",
          "Returning users are shown an overview of their stats, progression and recent scores and are able to click through to look at their stats or any of their scores in more detail."
        ],
        images: [ArchersDashboardDark, ArchersDashboardLight, ArchersNewUserDark, ArchersNewUserLight]
      },
      {
        title: "Scoring",
        description: [
          "When starting a new round users can choose from a number of standard round types or create their own custom round. They will then be able to choose their scoring method.",
          "Arrow Values: Each arrow is recorded by simply tapping on the button that corresponds to that arrows value. Quick, easy and straightforward.",
          "Arrow Positions: Scores are entered by tapping on a digital target face to register not only the value of each arrow, but also its position on the target. This enables them to receive instant feedback on group size, location and average point of impact, helping them to get their sight dialed in quickly and easily."
        ],
        images: [ArchersInProgressDark, ArchersInProgressLight]
      },
      {
        title: "Competitions",
        description: [
          "For competitive archers, competition practice is vital so we give users multiple ways to make their practice sessions more competitive.",
          "Any time a user starts scoring a round, they can choose to make it a virtual competition. An opponents score will be randomly generated, using the archers handicap rating to ensure it is of a suitable standard.",
          "Users will also be able to share scores with their friends and compete against them.",
          "Their opponents score will then be revealed as they progress through their own round as if they were shooting alongside you."
        ],
        images: [ArchersInProgressDark, ArchersInProgressLight]
      },
      {
        title: "Leagues",
        description: [
          "Users will be able to create their own custom leagues, either privately amongst their friends or open to the community.",
          "Choose the number of rounds shot, permitted round types, bow types, and more.",
          "Leagues can be shot as open or handicap competitions.",
          "Open: Scores are taken as they are, the highest score wins.",
          "Handicap: Scores are adjusted according to each archers handicap rating, meaning rankings are based on their performance relative to their expected scores. This allows archers of vastly different standards to compete on a level playing field."
        ],
        images: [ArchersInProgressDark, ArchersInProgressLight]
      }
    ],
    gallery: []
  },
  {
    name: "ajs-individual-frontend",
    title: "Frontend Individual Project",
    intro: [
      "This project was undertaken towards the end of the front-end portion of the Boolean UK bootcamp. At this stage we had spent around 8 weeks learning React, and we were given 5 days to put in to practice what we had learnt.",
      "My idea was to take the common `to do list` project and evolve it through the integration of API sources, giving theoretical uses such as having a list of movies where each new item automatically fetched the IMDB details of that movie, then being able to select any film in your list and look up cinema showings in your area.",
      "Given the short time frame it obviously wasn't feasible to follow this idea all the way to its conclusion, so I chose to set three targets to achieve.",
      "1: Build the design using a component library, something that we had not yet covered, and use some new styling elements.",
      "2: Have a functional, single-page web app with navigation and reactive elements.",
      "3: Have at least one API source set up that prompted the user for relevant information, completed a request and correctly handled the response.",
      "Overall I am pleased with this project. The page was built using Material-UI, I implemented a reactive masonry layout, had a functional list system that enabled creation, editing, deletion and favouriting lists, and integrated a weather API that gave the user a couple of different ways to interact with it.",
      "Given how early on in my learning this was, and the short timeframe permitted, I think it was a good effort and I took a lot from this project that certainly helped me going forwards."
    ],
    tech: [
      "JavaScript",
      "React",
      "React Router",
      "MUI",
      "Express"
    ],
    subSections: [],
    gallery: [FrontWeather, FrontServices, FrontLogin, FrontLists, FrontListEdit]
  },
  {
    name: "Bowls-Booking-App",
    title: "Bowls Booking App",
    intro: [
      "This project is is something that has been requested by a local bowls club, as they try to move away from pen and paper methods and bring some of their systems in to the 21st century.",
      "To begin with we are focusing on rink bookings and management of club events. Giving members an easy way to view available rinks, make their own bookings, and sign up for upcoming club events, created by the clubs admins.",
      "Given the short time frame it obviously wasn't feasible to follow this idea all the way to its conclusion, so I chose to set three targets to achieve.",
      "Due to the sport being one that generally attracts an older crowd, one of the highest priorities is usability. It is vital to ensure that the interface is clean, easy to understand, simple to interact with, and that the user experience is consistent across both desktop and mobile.",
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
    subSections: [],
    gallery: []
  }
];