import "src/css/home.css";

import { Box, ui } from "@adamjanicki/ui";
import Caption from "src/components/Caption";
import Secret from "src/components/Secret";

export default function Home() {
  return (
    <Box
      id="home"
      className="home"
      vfx={{ axis: "y", align: "center", justify: "between" }}
    >
      <Box />
      <ui.h1 vfx={{ fontWeight: 8 }} style={{ fontSize: 54 }}>
        Adam Janicki
      </ui.h1>
      <Box vfx={{ axis: "x", justify: "between", padding: "s", width: "full" }}>
        <Secret
          slug="star-wars-episode-iii-revenge-of-the-sith"
          text="Hello there!"
        />
        <Caption>Phelps Lake, Wyoming, 07.04.25</Caption>
      </Box>
    </Box>
  );
}
