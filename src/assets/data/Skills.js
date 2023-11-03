import auth0Webp from "../skillLogos/auth0.webp";
import cssWebp from "../skillLogos/css.webp";
import expressWebp from "../skillLogos/express.webp";
import figmaWebp from "../skillLogos/figma.webp";
import githubWebp from "../skillLogos/github.webp";
import htmlWebp from "../skillLogos/html.webp";
import jasmineWebp from "../skillLogos/jasmine.webp";
import jsWebp from "../skillLogos/js.webp";
import jotaiWebp from "../skillLogos/jotai.webp";
import jwtWebp from "../skillLogos/jwt.webp";
import mantineWebp from "../skillLogos/mantine.webp";
import mongodbWebp from "../skillLogos/mongodb.webp";
import muiWebp from "../skillLogos/mui.webp";
import netlifyWebp from "../skillLogos/netlify.webp";
import nextjsWebp from "../skillLogos/nextjs.webp";
import nodejsWebp from "../skillLogos/nodejs.webp";
import npmWebp from "../skillLogos/npm.webp";
import postgresqlWebp from "../skillLogos/postgresql.webp";
import prismaWebp from "../skillLogos/prisma.webp";
import reactWebp from "../skillLogos/react.webp";
import restfulAPIWebp from "../skillLogos/restfulAPI.webp";
import typescriptWebp from "../skillLogos/typescript.webp";
import viteWebp from "../skillLogos/vite.webp";

export const skills = [
  {
    title: "Technologies & Tools",
    description:
      "Here are a selection of tools, technologies and languages that I am comfortable using and have experience of working with, as well as some that I am currently, or soon to be, learning.",
    data: [
      {
        type: "Languages",
        webp: [
          jsWebp,
          htmlWebp,
          cssWebp,
        ],
      },
      {
        type: "Frameworks & Libraries",
        webp: [
          reactWebp,
          nodejsWebp,
          expressWebp,
          jasmineWebp,
          prismaWebp,
          mantineWebp,
          muiWebp,
          jwtWebp,
          jotaiWebp,
        ],
      },
      {
        type: "Tools & Services",
        webp: [
          postgresqlWebp,
          githubWebp,
          netlifyWebp,
          viteWebp,
          figmaWebp,
          mongodbWebp,
          auth0Webp,
          restfulAPIWebp,
          npmWebp,
        ],
      },
      {
        type: "Learning In Progress",
        webp: [
          typescriptWebp,
          nextjsWebp,
        ]
      },
    ],
  },
];