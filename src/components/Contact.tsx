import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./Section";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import Secret from "./Secret";

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
    href: "/AdamJanickiResume.pdf",
    title: "Resume",
    description: "Download my resume",
  },
] as const;

const ContactLink = ({ icon, href, title, description }: ContactInfo) => {
  return (
    <a
      className="flex flex-column ma2 items-center accent-hover"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icon} size="5x" />
      <h3 className="f3 fw6 ma0 pa0">{title}</h3>
      <p className="f6 fw3 ma0 pa0 dark-gray">{description}</p>
    </a>
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
