import { Box } from "@adamjanicki/ui";
import Secret from "src/components/Secret";
import "src/css/footer.css";

const Footer = () => (
  <footer className="mt5 footer flex flex-column items-center justify-between">
    <Box
      layout={{ axis: "x", justify: "between", padding: "m" }}
      className="w-100"
    >
      <p className="ma0 tr desktop" style={{ fontSize: "10px" }}>
        Did someone say… hidden movie quotes?
      </p>
      <Secret
        slug="the-silence-of-the-lambs"
        text="I'm having an old friend for dinner."
      />
    </Box>
    <p className="fw5 f5 pa1 br2" style={{ backdropFilter: "blur(8px)" }}>
      Est. 2023 Built from scratch by Adam
    </p>
    <Box
      layout={{ axis: "x", justify: "between", padding: "m" }}
      className="w-100"
    >
      <Secret
        text="This Is Ripley, Last Survivor Of The Nostromo...Signing Off."
        slug="alien"
      />
      <p className="ma0 f7 fw6 white">Cambridge, Massachusetts, 03.14.20</p>
    </Box>
  </footer>
);

export default Footer;
