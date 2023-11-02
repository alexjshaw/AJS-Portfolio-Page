import { Title } from "@mantine/core";
import classes from "./LandingPage.module.css"
import { ActionToggle } from "../components/utility/ActionToggle";

export default function LandingPage() {
  console.log('landingpage')
  return (
    <>
          <Title
          className={classes.testClass}
          >
            TEST
          </Title>
          <ActionToggle />
    </>
  )
}