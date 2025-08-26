import { useState } from "react";
import { TripleSpin as Hamburger } from "@adamjanicki/ui/components/Hamburger";
import { Box, UnstyledLink, useScroll, Icon } from "@adamjanicki/ui";
import "src/css/nav.css";

const SCROLL_THRESHOLD = 20;

const Nav = () => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  const scrolled = scrollY >= SCROLL_THRESHOLD;

  const closeMenu = () => setOpen(false);

  const Navlink = ({ title }: { title: string }) => (
    <li className="nav-item">
      <UnstyledLink
        className={`navlink ${scrolled ? "navlink-hover" : "dim"}`}
        to={`#${title.toLowerCase()}`}
        onClick={closeMenu}
      >
        <span>{title}</span>
      </UnstyledLink>
    </li>
  );

  return (
    <nav
      className={`flex items-center justify-between nav${
        scrolled || open ? "-scrolled" : ""
      }`}
    >
      <Box
        layout={{ axis: "x", align: "center", justify: "between" }}
        className="bar-container"
      >
        <UnstyledLink
          layout={{ axis: "x", align: "center" }}
          className="nav-title"
          to="#home"
          aria-label="home"
        >
          <Icon icon="architect" size="l" />
        </UnstyledLink>
        <Box className="mobile">
          <Hamburger
            open={open}
            onClick={() => setOpen(!open)}
            direction="right"
            size={44}
            style={{ margin: 2 }}
            aria-label="toggle menu"
            lineHeight={3}
          />
        </Box>
      </Box>
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
