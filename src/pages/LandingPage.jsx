import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Section from "../components/utility/LandingSection"

export default function LandingPage() {
  return (
    <>
      <Section isFirst={true}>
        <Hero />
      </Section>
      <Section withBackground={true}>
        <About />
      </Section>
      <Section>
        <Skills />
      </Section>
    </>
  )
}