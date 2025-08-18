import { Box, Link, Select } from "@adamjanicki/ui";
import { useState } from "react";
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
      <Link to="https://capitaltg.com" external>
        Capital Technology Group
      </Link>
      , as well as a Lab Assistant for 6.0001/2 (Intro to CS) under the MIT
      Department of EECS.
      <br />
      <br />
      Outside of Academics, I'm a member of the MIT Varsity Swimming and Diving
      Team, and also a mentor for{" "}
      <Link to="https://amphibious.mit.edu/" external>
        Amphibious Achievement
      </Link>
      . I'm a total geek for movies and TV, and enjoy{" "}
      <Link to="https://adamovies.com" external>
        sharing
      </Link>{" "}
      about what I watch.
      <br />
      <br />
      Thanks for stopping by; I'd love to connect! Feel free to reach out to me
      by{" "}
      <Link to="mailto:ajanicki@mit.edu" external>
        email
      </Link>
      !
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
      <Link to="https://stripe.com/" external>
        Stripe
      </Link>{" "}
      as a Software Engineering Intern 📈
      <br />
      <br />
      Recently, I've been working as a lab assistant for{" "}
      <Link to="http://student.mit.edu/catalog/m6a.html#6.031" external>
        6.031
      </Link>{" "}
      (Software Construction) at MIT 🔨
      <br />
      <br />
      Outside of Academics, I'm a member of the{" "}
      <Link
        to="https://mitathletics.com/sports/mens-swimming-and-diving/roster/2020-21"
        external
      >
        MIT Swim Team
      </Link>{" "}
      , and an{" "}
      <Link to="https://www.adamovies.com/" external>
        avid reviewer
      </Link>{" "}
      of movies and TV Shows 🎬
      <br />
      <br />
      Thanks for stopping by; I'd love to connect! Feel free to reach out to me
      by
      <Link to="mailto:ajanicki@mit.edu" external>
        email
      </Link>{" "}
      📬
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
      <Link to="https://www.adamovies.com/" external>
        Adamovies
      </Link>
      . My favorite movie of all time is{" "}
      <Link to="https://www.adamovies.com/review/interstellar" external>
        Interstellar
      </Link>
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
      <Link
        to="https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/"
        external
      >
        6.172/6.106
      </Link>
      . This Summer, I worked as a full-stack developer at Stripe, where I'll be
      returning full-time next Summer.
      <br />
      <br />
      Outside of work related things, I'm an ex-swimmer, and I love to bike,
      play sports, or do anything active. I also run a movie review website
      called{" "}
      <Link to="https://adamovies.com" external>
        Adamovies
      </Link>
      . My favorite movie of all time is Interstellar, but I have a soft spot
      for sci-fi in general.
    </>
  ),
  "Summer 2024": (
    <>
      Hey there! My name is Adam Janicki; I'm a recent-grad turned Software
      Engineer. Currently, I'm enjoying working at{" "}
      <Link to="https://stripe.com" external>
        Stripe
      </Link>
      . Since I'm no longer focusing on showcasing myself to potential
      employers, this is really just a fun spot for me. Welcome! <br />
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
      <Link to="https://adamovies.com" external>
        Adamovies
      </Link>
      . Recently, I've been loving exploring older movies with my friends,
      mainly including Hitchcock, but also other old(ish) directors like
      Kubrick. Check it out if you'd like!
    </>
  ),
  "Summer 2025": (
    <>
      Aloha! I'm Adam Janicki, a software engineering currently on all things
      email & SMS at <Link to="https://stripe.com">Stripe</Link>. Since this no
      longer serves <em>primarily</em> as means of showing my portfolio to
      potential employers, I try to keep this site fun for me, so keep an eye
      out for some hidden movie quotes!
      <br />
      <br />
      The TL;DR on me is web development has always been my favorite, but I also
      really enjoy optimizing code for performance since my days taking and
      TAing 6.172 at MIT a few years ago. But for now, I'm working on various
      fun sites and other frontend stuff.
      <br />
      <br />
      My primary hobbies outside of work mainly include athletic activities, but
      I've been hitting some roadblocks recently, with a shoulder reconstruction
      surgery almost two years ago, and most recently, a radial and humeral
      fracture from a bike crash.
      <br />
      <br />
      Of all the projects I've worked on, my pride and joy has always been{" "}
      <Link to="https://adamovies.com">Adamovies</Link>, my movie website that I
      run. I've been loving silver screen classics in the past years, and have
      ventured into writing some articles about{" "}
      <Link
        to="https://www.adamovies.com/article/100-years-of-soundtracks"
        external
      >
        film scores & music
      </Link>{" "}
      too!
    </>
  ),
} as const;

type Bio = keyof typeof bios;

const About = () => {
  const [bio, setBio] = useState<Bio>("Summer 2025");
  return (
    <Section
      id="about"
      title="About me"
      description="Welcome to Adam 101."
      secret={
        <Secret text="...because my dad promised me." slug="interstellar" />
      }
      secretAlign="end"
    >
      <Box
        layout={{ axis: "x", align: "center", justify: "center" }}
        className="mb3"
      >
        <p className="fw5 mr2">Viewing bio from:</p>
        <Select
          options={Object.keys(bios)}
          value={bio}
          onChange={(e) => setBio(e.target.value as Bio)}
          aria-label="bio select"
        />
      </Box>
      <Box className="h-about">
        <img src="/images/me.webp" alt="" className="br2 mr3 about-img mb2" />
        <p style={{ lineHeight: 1.5 }} className="f4 fw3 ma0 pa0">
          {bios[bio]}
        </p>
      </Box>
    </Section>
  );
};

export default About;
