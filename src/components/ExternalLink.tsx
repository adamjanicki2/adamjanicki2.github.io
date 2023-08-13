type Props = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink = (props: Props) => (
  // eslint-disable-next-line
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className="accent fw5 dim"
  />
);

export default ExternalLink;
