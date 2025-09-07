import { useState } from "react";
import { TripleSpin as Hamburger } from "@adamjanicki/ui/components/Hamburger";
import { Box, UnstyledLink, useScroll, Icon, ui } from "@adamjanicki/ui";
import "src/css/nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrolled = scrollY >= 25;

  const closeMenu = () => setOpen(false);

  const Navlink = ({ title }: { title: string }) => (
    <ui.li className="nav-item">
      <UnstyledLink
        className={`navlink ${scrolled ? "navlink-hover" : "dim"}`}
        to={`#${title.toLowerCase()}`}
        onClick={closeMenu}
      >
        {title}
      </UnstyledLink>
    </ui.li>
  );

  return (
    <ui.nav
      vfx={{ axis: "x", align: "center", justify: "between" }}
      className={`nav${scrolled || open ? "-scrolled" : ""}`}
    >
      <Box
        vfx={{ axis: "x", align: "center", justify: "between" }}
        className="bar-container"
      >
        <UnstyledLink
          vfx={{ axis: "x", align: "center" }}
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
      <ui.ul
        vfx={{ axis: "x", align: "center" }}
        className="desktop"
        // force display to be open on mobile when hamburger is toggled
        style={open ? { display: "flex" } : undefined}
      >
        <Navlink title="Home" />
        <Navlink title="About" />
        <Navlink title="Projects" />
        <Navlink title="Contact" />
      </ui.ul>
    </ui.nav>
  );
}
