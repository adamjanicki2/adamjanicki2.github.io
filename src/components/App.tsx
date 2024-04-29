import Nav from "src/components/Nav";
import About from "src/components/About";
import Home from "src/components/Home";
import Projects from "src/components/Projects";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";
import { useScrollToHash } from "@adamjanicki/core-ui";

const App = () => {
  useScrollToHash();
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
