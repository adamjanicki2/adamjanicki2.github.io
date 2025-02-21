import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "src/components/Section";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import Secret from "src/components/Secret";
import { UnstyledLink } from "src/components/Link";

type ContactInfo = {
  icon: IconProp;
  href: string;
  title: string;
  description: string;
};

const CONTACTS = [
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/adam-janicki-093859197/",
    title: "LinkedIn",
    description: "Connect with me",
  },
  {
    icon: faEnvelope,
    href: "mailto:adamjanicki2@gmail.com",
    title: "Email",
    description: "Shoot me an email",
  },
  {
    icon: faGithubAlt,
    href: "https://github.com/adamjanicki2",
    title: "GitHub",
    description: "Check out my GitHub",
  },
  {
    icon: faFileAlt,
    href: "/files/resume.pdf",
    title: "Resume",
    description: "View my resume",
  },
] as const;

const ContactLink = ({ icon, href, title, description }: ContactInfo) => {
  return (
    <UnstyledLink
      className="flex flex-column ma2 items-center accent-hover"
      to={href}
    >
      <FontAwesomeIcon icon={icon} size="5x" />
      <h1 className="f3 fw6 ma0 pa0">{title}</h1>
      <p className="f6 fw3 ma0 pa0 dark-gray">{description}</p>
    </UnstyledLink>
  );
};

const Contact = () => {
  return (
    <Section
      title="Contact"
      id="contact"
      description="Connect with me."
      secret={
        <Secret
          text="Snakes... why'd it have to be snakes?"
          slug="Raiders_of_the_Lost_Ark"
        />
      }
      secretAlign="end"
    >
      <div className="flex flex-wrap justify-around">
        {CONTACTS.map((contact) => (
          <ContactLink key={contact.title} {...contact} />
        ))}
      </div>
    </Section>
  );
};

export default Contact;
