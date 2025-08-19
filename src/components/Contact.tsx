import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "src/components/Section";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Secret from "src/components/Secret";
import { Box, UnstyledLink } from "@adamjanicki/ui";
import Atom from "src/img/atom.svg?react";

type ContactInfo = {
  icon: React.ReactNode;
  to: string;
  title: string;
  description: string;
};

const CONTACTS = [
  {
    icon: <FontAwesomeIcon icon={faLinkedin} size="5x" />,
    to: "https://www.linkedin.com/in/adam-janicki-093859197/",
    title: "LinkedIn",
    description: "Connect with me",
  },
  {
    icon: <FontAwesomeIcon icon={faGithubAlt} size="5x" />,
    to: "https://github.com/adamjanicki2",
    title: "GitHub",
    description: "Check out my GitHub",
  },
  {
    icon: <Atom height={64} style={{ margin: 8 }} />,
    to: "https://adamovies.com",
    title: "Blog",
    description: "My main updates",
  },
] as const;

const ContactLink = ({ icon, to, title, description }: ContactInfo) => (
  <UnstyledLink
    className="flex flex-column ma2 items-center accent-hover"
    to={to}
    external
  >
    {icon}
    <h1 className="f3 fw6 ma0 pa0">{title}</h1>
    <p className="f6 fw3 ma0 pa0 dark-gray">{description}</p>
  </UnstyledLink>
);

const Contact = () => (
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
    <Box layout={{ axis: "x", wrap: true }} className="justify-around">
      {CONTACTS.map((contact) => (
        <ContactLink key={contact.title} {...contact} />
      ))}
    </Box>
  </Section>
);

export default Contact;
