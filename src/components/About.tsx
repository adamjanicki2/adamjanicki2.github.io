import ExternalLink from "./ExternalLink";
import Secret from "./Secret";
import Section from "./Section";

const About = () => (
  <Section
    id="about"
    title="About me"
    description="Welcome to Adam 101."
    secret={
      <Secret text="...because my dad promised me." slug="Interstellar" />
    }
    secretAlign="end"
  >
    <div className="h-about">
      <img src="/me.png" alt="" className="br2 mr3 about-img mb2" />
      <p style={{ lineHeight: 1.5 }} className="f4 fw3 ma0 pa0">
        Welcome! I'm Adam Janicki, a Masters student studying Computer Science
        at MIT! You've somehow managed to stumble across my personal website,
        probably from a link on my resume, but if you managed to find this
        randomly, wow! <br />
        <br />
        I'm primarily interested in web development, but I also enjoy
        performance engineering, and making code run fast, specifically
        exploiting parallelism and multithreading. This Summer I'm working as a
        full-stack developer at Stripe.
        <br />
        <br />
        Outside of work related things, I'm an ex-swimmer, and I love to bike,
        play sports, or do anything active. I also run a movie review website
        called{" "}
        <ExternalLink href="https://adamovies.com">Adamovies</ExternalLink>. My
        favorite movie of all time is Interstellar, but I have a soft spot for
        sci-fi in general.
      </p>
    </div>
  </Section>
);

export default About;
