import { Box, UnstyledLink, ui } from "@adamjanicki/ui";
import Secret from "src/components/Secret";
import Section from "src/components/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Here's what I've been up to."
      secret={
        <Secret text="Aw man, I shot Marvin in the face!" slug="pulp-fiction" />
      }
      secretAlign="start"
    >
      <Box vfx={{ axis: "x", wrap: true, justify: "center" }}>
        {PROJECTS.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </Box>
    </Section>
  );
}

type ProjectType = {
  title: string;
  img: string;
  description: string;
  to: string;
  date: string;
};

const PROJECTS: readonly ProjectType[] = [
  {
    title: "Ping",
    img: "ping",
    description:
      "A little tool I built for pinging endpoints or sites. I'm most proud of the JSON formatter I custom built.",
    to: "/ping",
    date: "Feb 2025",
  },
  {
    title: "Arcade",
    img: "arcade",
    description:
      "JavaScript games were my first step into coding about 5 years ago, and I wanted to make a centralized arcade.",
    to: "/arcade",
    date: "Sep 2024",
  },
  {
    title: "React Library",
    img: "ui",
    description:
      "I like doing everything from scratch, and it's about time I have my own library so I don't have to copy over components anymore.",
    to: "/ui",
    date: "Jul 2024",
  },
  {
    title: "React Playground",
    img: "playground",
    to: "/react-playground",
    date: "Aug 2024",
    description:
      "A dynamically-compiled sandbox for playing around with React components and hooks, useful for quick playtesting.",
  },
  {
    title: "QR Scanner",
    img: "qr",
    to: "/qr",
    date: "Mar 2024",
    description:
      "I built this QR scanner primarily as means of determining the contents of mystery LEGO packs, but decided to generalize it.",
  },
  {
    title: "MDocs",
    img: "mdocs",
    to: "https://mdocs.adamjanicki.xyz",
    date: "Oct 2023",
    description:
      "A super simple and lightweight document manager that uses Markdown to create your documents, nice for writing documentation for your projects.",
  },
  {
    title: "OnTask",
    img: "on-task",
    to: "/on-task",
    date: "Sep 2023",
    description:
      "Tiny local storage based task & list manager that uses Markdown to format your ideas.",
  },
  {
    title: "8-Bit Art",
    img: "8bitart",
    to: "/8bitart",
    date: "Aug 2023",
    description:
      "A simple pixel art creator that I made for fun, useful for making retro Favicons and more.",
  },
  {
    title: "Portfolio",
    img: "portfolio",
    to: "#home",
    date: "Aug 2023",
    description:
      "This website! I made it as an HQ for my resources and info, and just wanted to build something from scratch for fun.",
  },
  {
    title: "Vercel MERN Template",
    img: "skeleton",
    to: "https://vercel-mern-skeleton.vercel.app/",
    date: "Nov 2022",
    description:
      "It's super hard to deploy a MERN stack application anywhere for free (especially Vercel), so I made a template to make it easier.",
  },
  {
    title: "Trackify",
    img: "trackify",
    to: "/trackify",
    date: "Jul 2022",
    description:
      "Back when the Spotify API was all the rage, I tried my hand at playing around with it.",
  },
  {
    title: "Adamovies",
    img: "adamovies",
    to: "https://adamovies.com",
    date: "Jan 2021",
    description:
      "A movie review website that I created immediately after learning React back in January, 2021. Think Roger Ebert but without the talent.",
  },
];

const Project = ({ title, img, description, to, date }: ProjectType) => {
  return (
    <UnstyledLink
      vfx={{ axis: "y", padding: "m", gap: "xs" }}
      className="accent-hover w-project"
      to={to}
      external={!to.startsWith("#")}
    >
      <ui.img
        src={`/images/projects/${img}.webp`}
        alt=""
        style={{ maxHeight: 420 }}
        vfx={{ radius: "rounded", border: true }}
      />
      <ui.h2 vfx={{ margin: "none" }}>{title}</ui.h2>
      <ui.p
        vfx={{ margin: "none", fontSize: "s", fontWeight: 5, color: "muted" }}
      >
        {date}
      </ui.p>
      <ui.p vfx={{ margin: "none", color: "default" }}>{description}</ui.p>
    </UnstyledLink>
  );
};
