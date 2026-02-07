import { useScrollToHash } from "@adamjanicki/ui";
import About from "src/components/About";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";
import Home from "src/components/Home";
import Nav from "src/components/Nav";
import Projects from "src/components/Projects";

export default function App() {
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
}
