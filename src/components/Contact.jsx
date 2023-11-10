import {
  Button,
  Box,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  ThemeIcon,
  Stack
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { MapPin, At, BrandGithub, Check, ExclamationMark } from "tabler-icons-react";
import emailjs from "@emailjs/browser";
import classes from "./Contact.module.css"

function ContactIcon({ title, text, Icon }) {
  return (
    <div className={classes.iconBox}>
      <ThemeIcon size={40} radius="md" className={classes.icon}>
        <Icon size={24} />
      </ThemeIcon>
      <div>
        <Text size="xs" className={classes.detailsTitle}>
          {title}
        </Text>
        <Text className={classes.detailText}>
          {text}
        </Text>
      </div>
    </div>
  )
}

const ContactData = [
  { title: "Email", text: "alexjshaw@gmail.com", Icon: At },
  { title: "Github", text: "alexjshaw", Icon: BrandGithub },
  { title: "Location", text: "Bristol, England", Icon: MapPin }
]

function ContactIcons({ data = ContactData }) {
  const items = data.map((item, index) => {
    return (
      <ContactIcon key={index} {...item} />
    )
  })
  return (
    <Stack>
      {items}
    </Stack>
  )
}

export default function Contact() {

  const serviceId = "service_def36uh"
  const templateId = "template_s873szk"
  const publicKey = "iqjHVs-gfEXx0Bxzo"

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: ""
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) => (value.length > 0 ? null : "Please provide a name"),
      message: (value) => (value.length > 0 ? null : "Please provide a message"),
    },
  })

  const onSubmit = (values) => {
    try {
      emailjs.send(serviceId, templateId, values, publicKey).then(() => {
        showNotification({
          title: "Thank You",
          message: "Message sent. I will respond ASAP.",
          color: "green",
          icon: <Check />
        })
        form.reset()
      })
    } catch (error) {
      showNotification({
        title: "Message Not Sent",
        message: "There was an error while sending your message. Please try again.",
        color: "red",
        icon: <ExclamationMark />
      })
    }
  }

  return (
    <Box className={classes.contactBox}>
    <SimpleGrid
    cols={2}
    spacing={50}
    breakpoints={[{ maxWidth: "sm", cols: 1 }]}
  >
    <div>
      <Title className={classes.title}>Contact me</Title>
      <Text className={classes.description} mt="sm" mb={30}>
        Please send a message with your name and email, and you should receive a response within 24 hours.
      </Text>

      <ContactIcons />
    </div>
    <form onSubmit={form.onSubmit(onSubmit)} className={classes.form}>
      <TextInput
        label="Email"
        placeholder="Your email"
        {...form.getInputProps("email")}
      />
      <TextInput
        label="Name"
        placeholder="Your name"
        mt="md"
        {...form.getInputProps("name")}
      />
      <Textarea
        label="Your message"
        placeholder="Your message"
        minRows={4}
        mt="md"
        {...form.getInputProps("message")}
      />

      <Group position="right" mt="md">
        <Button type="submit" className={classes.button}>
          Send message
        </Button>
      </Group>
    </form>
  </SimpleGrid>
  </Box>
  )
}