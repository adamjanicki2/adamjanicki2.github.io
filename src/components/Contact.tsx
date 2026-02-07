import { Box, Icon, ui, UnstyledLink } from "@adamjanicki/ui";
import { link, shell } from "@adamjanicki/ui/icons";
import Secret from "src/components/Secret";
import Section from "src/components/Section";
import Atom from "src/img/atom.svg?react";

export default function Contact() {
  return (
    <Section
      title="Contact"
      id="contact"
      description="Connect with me."
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
  icon: React.ReactNode;
  to: string;
  title: string;
  description: string;
};

const CONTACTS = [
  {
    icon: <Icon icon={link} size="xxl" />,
    to: "https://www.linkedin.com/in/adam-janicki-093859197/",
    title: "LinkedIn",
    description: "Connect with me",
  },
  {
    icon: <Icon icon={shell} size="xxl" />,
    to: "https://github.com/adamjanicki2",
    title: "GitHub",
    description: "Check out my GitHub",
  },
  {
    icon: <Atom height={64} />,
    to: "https://adamovies.com",
    title: "Blog",
    description: "My main updates",
  },
] as const;

const ContactLink = ({ icon, to, title, description }: ContactInfo) => (
  <UnstyledLink
    vfx={{ axis: "y", align: "center", margin: "s" }}
    className="accent-hover"
    to={to}
    newTab
  >
    {icon}
    <ui.h2 vfx={{ margin: "none" }}>{title}</ui.h2>
    <ui.p
      vfx={{ margin: "none", fontSize: "s", fontWeight: 5, color: "muted" }}
    >
      {description}
    </ui.p>
  </UnstyledLink>
);
