import { useState } from "react";
import { TripleSpin as Hamburger } from "@adamjanicki/ui/components/Hamburger";
import { useScroll } from "@adamjanicki/ui";
import { ReactComponent as Logo } from "src/img/logo.svg";
import "src/css/nav.css";

const SCROLL_THRESHOLD = 20;

const Nav = () => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const scrolled = scrollY >= SCROLL_THRESHOLD;

  const closeMenu = () => setOpen(false);

  const Navlink = ({ title }: { title: string }) => (
    <li className="nav-item">
      <a
        className={`navlink ${scrolled ? "navlink-hover" : "dim"}`}
        href={`#${title.toLowerCase()}`}
        onClick={closeMenu}
      >
        <span>{title}</span>
      </a>
    </li>
  );

  return (
    <nav
      className={`flex items-center justify-between nav${
        scrolled || open ? "-scrolled" : ""
      }`}
    >
      <div className="flex items-center justify-between bar-container">
        <a
          className="nav-title flex items-center"
          href="#home"
          aria-label="home"
        >
          <span className="desktop">Adam Janicki</span>
          <Logo height={32} className="mobile" />
        </a>
        <div className="mobile">
          <Hamburger
            open={open}
            onClick={() => setOpen(!open)}
            direction="right"
            size={44}
            style={{ margin: 2 }}
            duration={0.4}
            aria-label="toggle menu"
            lineHeight={3}
          />
        </div>
      </div>
      <ul
        className="flex items-center desktop"
        // force display to be open on mobile when hamburger is toggled
        style={open ? { display: "flex" } : undefined}
      >
        <Navlink title="Home" />
        <Navlink title="About" />
        <Navlink title="Projects" />
        <Navlink title="Contact" />
      </ul>
    </nav>
  );
};

export default Nav;
