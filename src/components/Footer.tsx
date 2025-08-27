import { Box } from "@adamjanicki/ui";
import Secret from "src/components/Secret";
import "src/css/footer.css";

const Footer = () => (
  <Box
    layout={{
      axis: "y",
      align: "center",
      justify: "between",
      marginTop: "xxl",
    }}
    className="footer"
  >
    <Box
      layout={{ axis: "x", justify: "between", padding: "m", width: "full" }}
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
      layout={{ axis: "x", justify: "between", padding: "m", width: "full" }}
    >
      <Secret
        text="This Is Ripley, Last Survivor Of The Nostromo...Signing Off."
        slug="alien"
      />
      <p className="ma0 f7 fw6 white">Cambridge, Massachusetts, 03.14.20</p>
    </Box>
  </Box>
);

export default Footer;
