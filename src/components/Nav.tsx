import { useState } from "react";
import { TripleSpin as Hamburger } from "@adamjanicki/ui/components/Hamburger";
import { Box, UnstyledLink, Link, useScroll, Icon, ui } from "@adamjanicki/ui";
import { architect } from "@adamjanicki/ui/icons";
import "src/css/nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrolled = scrollY >= 25;

  return (
    <ui.nav className={`nav${scrolled || open ? "-scrolled" : ""}`}>
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
            style={{ margin: 2 }}
            aria-label="toggle menu"
            lineHeight={3}
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
