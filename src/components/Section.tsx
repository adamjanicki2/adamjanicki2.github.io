import type { ReactNode } from "react";
import "src/css/section.css";

type Props = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
  secret: JSX.Element;
  secretAlign: "start" | "end";
};

const Section = ({
  title,
  id,
  children,
  description,
  secret,
  secretAlign,
}: Props) => (
  <section className="section">
    <div className={`flex justify-${secretAlign}`}>{secret}</div>
    <h1 id={id} className="section-title tc ma0 pa0">
      {title}
    </h1>
    <p className="tc ma0 pa1">{description}</p>
    <div
      style={{ width: 50, height: 5 }}
      className="m-auto mt2 mb3 bg-accent"
    />
    {children}
  </section>
);

export default Section;
