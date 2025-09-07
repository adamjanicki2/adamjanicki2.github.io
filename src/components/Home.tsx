import { Box } from "@adamjanicki/ui";
import Secret from "src/components/Secret";
import "src/css/home.css";

const Home = () => (
  <Box
    id="home"
    className="marquee white"
    vfx={{ axis: "y", align: "center", justify: "between" }}
  >
    <Box />
    <h1 className="home-welcome tc">Hi, I'm Adam.</h1>
    <Box vfx={{ axis: "x", justify: "between", padding: "m", width: "full" }}>
      <Secret
        slug="star-wars-episode-iii-revenge-of-the-sith"
        text="Hello there!"
      />
      <p className="ma0 f7 fw6">Big Sur, California, 08.06.22</p>
    </Box>
  </Box>
);

export default Home;
