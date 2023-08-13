type Props = {
  slug: string;
  text: string;
};

const Secret = ({ slug, text }: Props) => (
  <a
    href={`https://adamovies.com/review/${slug}`}
    className="hidden-text f7 i Hey, inspecting element is cheating!"
    target="_blank"
    rel="noopener noreferrer"
  >
    "{text}"
  </a>
);

export default Secret;
