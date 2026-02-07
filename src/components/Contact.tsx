import { Box, Icon, ui, UnstyledLink } from "@adamjanicki/ui";
import { link, newspaper, shell } from "@adamjanicki/ui/icons";
import type { IconType } from "@adamjanicki/ui/types/icon";
import Secret from "src/components/Secret";
import Section from "src/components/Section";

export default function Contact() {
  return (
    <Section
      title="Contact"
      id="contact"
      description="My main info"
      secret={
        <Secret
          text="Snakes... why'd it have to be snakes?"
          slug="raiders-of-the-lost-ark"
        />
      }
      secretAlign="end"
    >
      <Box vfx={{ axis: "x", wrap: true, justify: "around" }}>
        {CONTACTS.map((contact) => (
          <ContactLink key={contact.title} {...contact} />
        ))}
      </Box>
    </Section>
  );
}

type ContactInfo = {
  icon: IconType;
  to: string;
  title: string;
  description: string;
};

const CONTACTS: readonly ContactInfo[] = [
  {
    icon: link,
    to: "https://www.linkedin.com/in/adam-janicki-093859197/",
    title: "LinkedIn",
    description: "Connect with me",
  },
  {
    icon: shell,
    to: "https://github.com/adamjanicki2",
    title: "GitHub",
    description: "Check out my GitHub",
  },
  {
    icon: newspaper,
    to: "https://adamovies.com",
    title: "Blog",
    description: "My movie reviews",
  },
];

const ContactLink = ({ icon, to, title, description }: ContactInfo) => (
  <UnstyledLink
    vfx={{ axis: "y", align: "center", margin: "s", gap: "xs", hover: "dim" }}
    to={to}
    newTab
  >
    <Icon icon={icon} size="xxl" />
    <ui.h2 vfx={{ margin: "none", fontWeight: 8 }}>{title}</ui.h2>
    <ui.span vfx={{ fontSize: "s", fontWeight: 6, color: "muted" }}>
      {description}
    </ui.span>
  </UnstyledLink>
);
