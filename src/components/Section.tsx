import { Box, ui } from "@adamjanicki/ui";
import { ReactNode } from "react";
import "src/css/section.css";

type Props = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
  secret: JSX.Element;
  secretAlign: "start" | "end";
};

export default function Section({
  title,
  id,
  children,
  description,
  secret,
  secretAlign,
}: Props) {
  return (
    <ui.section className="section">
      <Box vfx={{ axis: "x", justify: secretAlign }}>{secret}</Box>
      <ui.h1
        vfx={{ textAlign: "center", margin: "none" }}
        id={id}
        className="section-title"
      >
        {title}
      </ui.h1>
      <ui.p vfx={{ margin: "none", textAlign: "center" }}>{description}</ui.p>
      <Box
        vfx={{ marginX: "auto", marginTop: "s", marginBottom: "m" }}
        style={{ width: 50, height: 5 }}
        className="bg-accent"
      />
      {children}
    </ui.section>
  );
}
