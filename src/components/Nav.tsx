import "src/css/nav.css";

import { Box, Icon, Link, ui, UnstyledLink, useScroll } from "@adamjanicki/ui";
import { TripleSpin as Hamburger } from "@adamjanicki/ui/components/Hamburger";
import { architect } from "@adamjanicki/ui/icons";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrolled = scrollY >= 25;

  return (
    <ui.nav className={scrolled || open ? "nav-scrolled" : undefined}>
      <Box
        vfx={{ axis: "x", align: "center", justify: "between" }}
        className="bar-container"
      >
        <UnstyledLink
          vfx={{ axis: "x", align: "center" }}
          to="#home"
          aria-label="home"
        >
          <Icon icon={architect} size="l" />
        </UnstyledLink>
        <Box className="mobile">
          <Hamburger
            open={open}
            onClick={() => setOpen(!open)}
            direction="right"
            size={44}
            vfx={{ margin: "xs" }}
            aria-label="toggle menu"
            barHeight={3}
          />
        </Box>
      </Box>
      <Box
        className="desktop navlink-container"
        style={open ? { display: "flex" } : undefined}
      >
        {["Home", "About", "Projects", "Contact"].map((title) => (
          <Link
            key={title}
            vfx={{ width: "full", color: "inherit" }}
            to={`#${title.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {title}
          </Link>
        ))}
      </Box>
    </ui.nav>
  );
}
