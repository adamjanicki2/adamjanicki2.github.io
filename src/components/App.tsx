import { useState } from "react";
import Nav from "./Nav";
import Scroll from "./Scroll";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const SCROLL_THRESHOLD = 20;

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    const scrollY = window.scrollY;
    if (!scrolled && scrollY > SCROLL_THRESHOLD) setScrolled(true);
    else if (scrolled && scrollY <= SCROLL_THRESHOLD) setScrolled(false);
  };

  return (
    <>
      <Scroll onScroll={onScroll} />
      <Nav scrolled={scrolled} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
