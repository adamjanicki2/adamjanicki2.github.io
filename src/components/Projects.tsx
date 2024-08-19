import Secret from "src/components/Secret";
import Section from "src/components/Section";

type Props = {
  title: string;
  img: string;
  description: string;
  href: string;
  date: string;
};

const PROJECTS = [
  {
    title: "React Playground",
    img: "playground.webp",
    href: "/react-playground",
    date: "Aug 2024",
    description:
      "A dynamically-compiled sandbox for playing around with React components and hooks, useful for quick playtesting.",
  },
  {
    title: "QR Scanner",
    img: "qr.webp",
    href: "/qr",
    date: "Mar 2024",
    description:
      "I built this QR scanner primarily as means of determining the contents of mystery LEGO packs, but decided to generalize it.",
  },
  {
    title: "MDocs",
    img: "mdocs.webp",
    href: "https://mdocs.adamjanicki.xyz",
    date: "Oct 2023",
    description:
      "A super simple and lightweight document manager that uses Markdown to create your documents, nice for writing documentation for your projects.",
  },
  {
    title: "OnTask",
    img: "on-task.webp",
    href: "/on-task",
    date: "Sep 2023",
    description:
      "Tiny local storage based task & list manager that uses Markdown to format your ideas.",
  },
  {
    title: "8-Bit Art",
    img: "8bitart.webp",
    href: "/8bitart",
    date: "Aug 2023",
    description:
      "A simple pixel art creator that I made for fun, useful for making retro Favicons and more.",
  },
  {
    title: "Portfolio",
    img: "portfolio.webp",
    href: "#home",
    date: "Aug 2023",
    description:
      "This website! I made it as an HQ for my resources and info, and just wanted to build something from scratch for fun.",
  },
  {
    title: "Vercel MERN Template",
    img: "skeleton.webp",
    href: "https://vercel-mern-skeleton.vercel.app/",
    date: "Nov 2022",
    description:
      "It's super hard to deploy a MERN stack application anywhere for free (especially Vercel), so I made a template to make it easier.",
  },
  {
    title: "Trackify",
    img: "trackify.webp",
    href: "/trackify",
    date: "Jul 2022",
    description:
      "Back when the Spotify API was all the rage, I tried my hand at playing around with it.",
  },
  {
    title: "Adamovies",
    img: "adamovies.webp",
    href: "https://adamovies.com",
    date: "Jan 2021",
    description:
      "A movie review website that I created immediately after learning React back in January, 2021. Think Roger Ebert but without the talent.",
  },
] as const;

const Project = ({ title, img, description, href, date }: Props) => {
  return (
    <div className="pa2 mv2 pc-w">
      <a
        className="flex flex-column accent-hover"
        href={href}
        target={href.startsWith("#") ? undefined : "_blank"}
        rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
      >
        <img
          src={`/images/${img}`}
          alt=""
          style={{ maxHeight: 400 }}
          className="ba br2 b--moon-gray"
        />
        <h2 className="ma0 mv1 f3 fw6">{title}</h2>
        <p className="ma0 mb1 dark-gray f6 fw5">{date}</p>
        <p className="ma0 black fw4">{description}</p>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Here's what I've been up to."
      secret={
        <Secret text="Aw man, I shot Marvin in the face!" slug="Pulp_Fiction" />
      }
      secretAlign="start"
    >
      <div className="flex flex-wrap justify-around">
        {PROJECTS.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
