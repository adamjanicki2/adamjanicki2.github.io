import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { useWatchScroll } from "@adamjanicki/ui";

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
        <a className="nav-title" href="#home">
          Adam Janicki
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
        className={`flex items-center mobile-hide`}
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
