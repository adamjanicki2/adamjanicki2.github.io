import { Select } from "@adamjanicki/ui";
import { useState } from "react";
import ExternalLink from "src/components/ExternalLink";
import Secret from "src/components/Secret";
import Section from "src/components/Section";

const bios = {
  "Summer 2021": (
    <>
      Hi! My name is <span className="b">Adam Janicki</span>, and I'm a junior
      at MIT studying Computer Science and Engineering (Course 6-3).
      <br />
      <br />
      Recently, I've been working as a Software Developer Intern for{" "}
      <ExternalLink href="https://capitaltg.com">
        Capital Technology Group
      </ExternalLink>
      , as well as a Lab Assistant for 6.0001/2 (Intro to CS) under the MIT
      Department of EECS.
      <br />
      <br />
      Outside of Academics, I'm a member of the MIT Varsity Swimming and Diving
      Team, and also a mentor for{" "}
      <ExternalLink href="https://amphibious.mit.edu/">
        Amphibious Achievement
      </ExternalLink>
      . I'm a total geek for movies and TV, and enjoy{" "}
      <ExternalLink href="https://adamovies.com">sharing</ExternalLink> about
      what I watch.
      <br />
      <br />
      Thanks for stopping by; I'd love to connect! Feel free to reach out to me
      by <ExternalLink href="mailto:ajanicki@mit.edu">email</ExternalLink>!
    </>
  ),
  "Spring 2022": (
    <>
      Hi! My name is Adam Janicki 😄
      <br />
      <br />
      I'm a junior at MIT studying Computer Science 🖥
      <br />
      <br />
      Starting in May 2022, I'll be working for{" "}
      <ExternalLink href="https://stripe.com/">Stripe</ExternalLink> as a
      Software Engineering Intern 📈
      <br />
      <br />
      Recently, I've been working as a lab assistant for{" "}
      <ExternalLink href="http://student.mit.edu/catalog/m6a.html#6.031">
        6.031
      </ExternalLink>{" "}
      (Software Construction) at MIT 🔨
      <br />
      <br />
      Outside of Academics, I'm a member of the{" "}
      <ExternalLink href="https://mitathletics.com/sports/mens-swimming-and-diving/roster/2020-21">
        MIT Swim Team
      </ExternalLink>{" "}
      , and an{" "}
      <ExternalLink href="https://www.adamovies.com/">
        avid reviewer
      </ExternalLink>{" "}
      of movies and TV Shows 🎬
      <br />
      <br />
      Thanks for stopping by; I'd love to connect! Feel free to reach out to me
      by
      <ExternalLink href="mailto:ajanicki@mit.edu">email</ExternalLink> 📬
    </>
  ),
  "Fall 2022": (
    <>
      Welcome! I'm Adam Janicki, a senior studying Computer Science at MIT! This
      is my personal website, and is somewhat a cross between a portfolio and
      informal website. Either way it's a mess.
      <br />
      <br />
      I'm primarily interested in web development, specifically React. Speed and
      performance are also super fun, especially after taking 6.172 as a junior.
      This Summer I'm working as a frontend developer at Stripe.
      <br /> <br />
      Outside of work related things, I love to swim or do anything active. I
      also run a movie review website called{" "}
      <ExternalLink href="https://www.adamovies.com/">Adamovies</ExternalLink>.
      My favorite movie of all time is{" "}
      <ExternalLink href="https://www.adamovies.com/review/Interstellar">
        Interstellar
      </ExternalLink>
      , but I have a soft spot for sci-fi in general.
    </>
  ),
  "Fall 2023": (
    <>
      Welcome! I'm Adam Janicki, a Masters student studying Computer Science at
      MIT! You've somehow managed to stumble across my personal website,
      probably from a link on my resume, but if you managed to find this
      randomly, wow! <br />
      <br />
      I'm primarily interested in web development, but I also enjoy performance
      engineering, and making code run fast, which is why I'm a TA for MIT's
      famous{" "}
      <ExternalLink href="https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/">
        6.172/6.106
      </ExternalLink>
      . This Summer, I worked as a full-stack developer at Stripe, where I'll be
      returning full-time next Summer.
      <br />
      <br />
      Outside of work related things, I'm an ex-swimmer, and I love to bike,
      play sports, or do anything active. I also run a movie review website
      called <ExternalLink href="https://adamovies.com">Adamovies</ExternalLink>
      . My favorite movie of all time is Interstellar, but I have a soft spot
      for sci-fi in general.
    </>
  ),
  "Summer 2024": (
    <>
      Hey there! My name is Adam Janicki; I'm a recent-grad turned Software
      Engineer. Currently, I'm enjoying working at{" "}
      <ExternalLink href="https://stripe.com">Stripe</ExternalLink>. Since I'm
      no longer focusing on showcasing myself to potential employers, this is
      really just a fun spot for me. Welcome! <br />
      <br />
      A little bit of background about me: web development has always been my
      favorite, but I also enjoy performance engineering, and
      cryptography/security. In the past, I was a student at MIT where I TA'd a
      few classes related to software development in TypeScript, as well as
      low-level performance engineering in C.
      <br />
      <br />
      My primary hobbies outside of work mainly include athletic activities; I'm
      a former college swimmer recovering from a shoulder surgery, so I've been
      enjoying getting into biking in running, potentially in preparation for a
      70.3 soon.
      <br />
      <br />
      My pride and joy is a movie review website I run and write for called{" "}
      <ExternalLink href="https://adamovies.com">Adamovies</ExternalLink>.
      Recently, I've been loving exploring older movies with my friends, mainly
      including Hitchcock, but also other old(ish) directors like Kubrick. Check
      it out if you'd like!
    </>
  ),
} as const;

type BioKey = keyof typeof bios;

const About = () => {
  const [bio, setBio] = useState<BioKey>("Summer 2024");
  return (
    <Section
      id="about"
      title="About me"
      description="Welcome to Adam 101."
      secret={
        <Secret text="...because my dad promised me." slug="Interstellar" />
      }
      secretAlign="end"
    >
      <div className="flex items-center justify-center mb3">
        <p className="fw5 mr2">Viewing bio from:</p>
        <Select
          options={Object.keys(bios)}
          value={bio}
          onChange={(e) => setBio(e.target.value as BioKey)}
          aria-label="bio select"
        />
      </div>
      <div className="h-about">
        <img src="/images/me.webp" alt="" className="br2 mr3 about-img mb2" />
        <p style={{ lineHeight: 1.5 }} className="f4 fw3 ma0 pa0">
          {bios[bio]}
        </p>
      </div>
    </Section>
  );
};

export default About;
