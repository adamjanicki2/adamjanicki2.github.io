import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { useWatchScroll } from "@adamjanicki/ui";
import { ReactComponent as Logo } from "src/img/logo.svg";

const SCROLL_THRESHOLD = 20;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onScroll = () => {
    const scrollY = window.scrollY;
    if (!scrolled && scrollY > SCROLL_THRESHOLD) setScrolled(true);
    else if (scrolled && scrollY <= SCROLL_THRESHOLD) setScrolled(false);
  };
  useWatchScroll(onScroll);
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
        <a className="nav-title flex items-center" href="#home">
          <span className="desktop">Adam Janicki</span>
          <Logo height={32} className="mobile" />
        </a>
        <div className="mobile">
          <Hamburger
            toggled={open}
            onToggle={() => setOpen(!open)}
            direction="right"
            size={32}
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
