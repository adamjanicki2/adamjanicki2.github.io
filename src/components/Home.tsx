import { Box, ui } from "@adamjanicki/ui";
import Caption from "src/components/Caption";
import Secret from "src/components/Secret";
import "src/css/home.css";

export default function Home() {
  return (
    <Box
      id="home"
      className="marquee white"
      vfx={{ axis: "y", align: "center", justify: "between" }}
    >
      <Box />
      <ui.h1 className="home-welcome">Hi, I'm Adam.</ui.h1>
      <Box vfx={{ axis: "x", justify: "between", padding: "m", width: "full" }}>
        <Secret
          slug="star-wars-episode-iii-revenge-of-the-sith"
          text="Hello there!"
        />
        <Caption>Big Sur, California, 08.06.22</Caption>
      </Box>
    </Box>
  );
}
