import { UnstyledLink } from "@adamjanicki/ui";
import "src/css/secret.css";

type Props = {
  slug: string;
  text: string;
};

export default function Secret({ slug, text }: Props) {
  return (
    <UnstyledLink
      to={`https://adamovies.com/review/${slug}`}
      vfx={{ fontSize: "xs", fontWeight: 6, italics: true }}
      className="hidden-text"
      newTab
    >
      “{text}”
    </UnstyledLink>
  );
}
