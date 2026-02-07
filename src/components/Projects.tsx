import { Box, ui, UnstyledLink } from "@adamjanicki/ui";
import Secret from "src/components/Secret";
import Section from "src/components/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="Some cool stuff I've built"
      secret={<Secret text="I have friends everywhere" slug="andor-s2" />}
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
    title: "Markdown",
    img: "markdown",
    description:
      "My MEng thesis was on ASTs, so I've always been fascinated by Markdown. I built a custom parser to power my movie website.",
    to: "/markdown",
    date: "Jan 2026",
  },
  {
    title: "Monsters",
    img: "monsters",
    description:
      "A simple Pokémon toolkit I built for usage during battles to determine good type matchups and more.",
    to: "/monsters",
    date: "Dec 2025",
  },
  {
    title: "Ping",
    img: "ping",
    description:
      "A little tool I built for pinging endpoints or sites. I'm most proud of the JSON renderer that I custom built.",
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
    title: "React Playground",
    img: "playground",
    to: "/react-playground",
    date: "Aug 2024",
    description:
      "A dynamically-compiled sandbox for playing around with React components and hooks, useful for quick playtesting.",
  },
  {
    title: "UI",
    img: "ui",
    description:
      "I like doing everything from scratch, and it's about time I have my own library so I don't have to copy over components anymore.",
    to: "/ui",
    date: "Jul 2024",
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
    title: "8-Bit Art",
    img: "8bitart",
    to: "/8bitart",
    date: "Aug 2023",
    description:
      "A simple pixel art creator that I made for fun, useful for making retro Favicons and more.",
  },
  {
    title: "Trackify",
    img: "trackify",
    to: "/trackify",
    date: "Jul 2022",
    description:
      "Back when the Spotify API was all the rage, I tried my hand at playing around with it. Due to recent Spotify API changes, it might not work.",
  },
  {
    title: "Home",
    img: "home",
    to: "#home",
    date: "Feb 2022",
    description:
      "This website! I made it as an HQ for my resources and info, and just wanted to build something from scratch for fun.",
  },
  {
    title: "Adamovies",
    img: "adamovies",
    to: "https://adamovies.com",
    date: "Jan 2021",
    description:
      "A movie review website that I created immediately after learning how to do web programming. It's a living record of all movies I've seen since 2021.",
  },
];

const Project = ({ title, img, description, to, date }: ProjectType) => {
  return (
    <UnstyledLink
      vfx={{ axis: "y", padding: "m", gap: "xs", hover: "dim" }}
      className="proj-container"
      to={to}
      newTab={!to.startsWith("#")}
    >
      <ui.img
        src={`/images/projects/${img}.webp`}
        alt=""
        style={{ maxHeight: 420 }}
        vfx={{ radius: "rounded", border: true, shadow: "subtle" }}
      />
      <ui.h2 vfx={{ margin: "none" }}>{title}</ui.h2>
      <ui.span vfx={{ fontSize: "s", fontWeight: 6, color: "muted" }}>
        {date}
      </ui.span>
      <ui.p vfx={{ margin: "none" }}>{description}</ui.p>
    </UnstyledLink>
  );
};
