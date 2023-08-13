import { useEffect } from "react";

type Props = {
  onScroll: () => void;
};

const Scroll = ({ onScroll }: Props) => {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return null;
};

export default Scroll;
