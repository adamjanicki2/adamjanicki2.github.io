import { UnstyledLink } from "@adamjanicki/ui";
import "src/css/secret.css";

type Props = {
  slug: string;
  text: string;
};

const Secret = ({ slug, text }: Props) => (
  <UnstyledLink
    to={`https://adamovies.com/review/${slug}`}
    className="hidden-text f7 i Hey, inspecting element is cheating!"
  >
    "{text}"
  </UnstyledLink>
);

export default Secret;
