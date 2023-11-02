import { ActionIcon } from "@mantine/core";

import Hero from "../components/Hero"
import Section from "../components/utility/LandingSection"

import classes from "./LandingPage.module.css"

export default function LandingPage() {
  return (
    <>
      <Section isFirst={true}>
        <Hero />
      </Section>
    </>
  )
}