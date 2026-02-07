import "src/css/footer.css";

import { Box, ui } from "@adamjanicki/ui";
import Caption from "src/components/Caption";
import Secret from "src/components/Secret";

export default function Footer() {
  return (
    <ui.footer
      vfx={{
        axis: "y",
        align: "center",
        justify: "between",
        marginTop: "xxl",
        padding: "s",
      }}
      style={{ color: "white" }}
    >
      <Box vfx={{ axis: "x", justify: "between", width: "full", wrap: true }}>
        <Secret
          slug="tenet"
          text="For me, I think this is the end of a beautiful friendship"
        />
        <Secret
          slug="the-silence-of-the-lambs"
          text="I'm having an old friend for dinner."
        />
      </Box>
      <ui.p vfx={{ fontWeight: 6, color: "default" }} className="blur">
        Est. 2022 Built from scratch by Adam
      </ui.p>
      <Box vfx={{ axis: "x", justify: "between", width: "full", wrap: true }}>
        <Secret
          text="This is Ripley, last survivor of The Nostromo...signing off."
          slug="alien"
        />
        <Caption>Cambridge, Massachusetts, 03.14.20</Caption>
      </Box>
    </ui.footer>
  );
}
