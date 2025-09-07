import Nav from "src/components/Nav";
import About from "src/components/About";
import Home from "src/components/Home";
import Projects from "src/components/Projects";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";
import { useScrollToHash } from "@adamjanicki/ui";

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
