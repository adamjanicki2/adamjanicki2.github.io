import { Box, ui } from "@adamjanicki/ui";
import Caption from "src/components/Caption";
import Secret from "src/components/Secret";
import "src/css/footer.css";

export default function Footer() {
  return (
    <ui.footer
      vfx={{
        axis: "y",
        align: "center",
        justify: "between",
        marginTop: "xxl",
      }}
    >
      <Box vfx={{ axis: "x", justify: "between", padding: "m", width: "full" }}>
        <ui.p vfx={{ margin: "none", fontSize: "xxs" }}>
          Did someone say… hidden movie quotes?
        </ui.p>
        <Secret
          slug="the-silence-of-the-lambs"
          text="I'm having an old friend for dinner."
        />
      </Box>
      <ui.p
        vfx={{ fontWeight: 5, radius: "rounded", padding: "xs" }}
        style={{ backdropFilter: "blur(8px)" }}
      >
        Est. 2023 Built from scratch by Adam
      </ui.p>
      <Box vfx={{ axis: "x", justify: "between", padding: "m", width: "full" }}>
        <Secret
          text="This Is Ripley, Last Survivor Of The Nostromo...Signing Off."
          slug="alien"
        />
        <Caption>Cambridge, Massachusetts, 03.14.20</Caption>
      </Box>
    </ui.footer>
  );
}
