import {
  Container,
  SimpleGrid,
  Text,
  Title,
  Box,
} from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./Skills.module.css"
import { skills } from "../assets/data/Skills";

export default function Skills() {
  return (
    <Container px="xl" size="lg">
      <Box className={classes.skillsBox}>
        {skills.map((item, index) => (
          <div key={index}>
            <Title className={classes.title}
              order={1}
            >
              {item.title}
            </Title>
            <Text>{item.description}</Text>
            {item.data.map((dataItem, index) => (
              <div key={index}>
                <Text className={classes.subTitle}>{dataItem.type}</Text>
                <SimpleGrid
                  cols={{ base: 3, sm: 5, md: 7, lg: 9}}
                  spacing={{ base: "xs", sm: "sm", md: "lg", lg: "xl"}}
                  verticalSpacing={"lg"}
                  // cols={9}
                  // spacing="xl"
                  // breakpoints={[
                  //   { maxWidth: 980, cols: 7, spacing: "md" },
                  //   { maxWidth: 755, cols: 5, spacing: "sm" },
                  //   { maxWidth: 600, cols: 4, spacing: "sm" },
                  //   { maxWidth: 450, cols: 3, spacing: "sm" },
                  // ]}
                >
                  {dataItem.webp.map((subDataitem) => (
                    <motion.img
                      key={subDataitem}
                      alt={subDataitem}
                      className={classes.img}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                      src={subDataitem}
                    />
                  ))}
                </SimpleGrid>
              </div>
            ))}
          </div>
        ))}
      </Box>
    </Container>
  );
}