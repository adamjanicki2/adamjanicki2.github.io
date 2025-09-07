import { ui } from "@adamjanicki/ui";

type Props = {
  children: string;
};

export default function Caption(props: Props) {
  return (
    <ui.p
      vfx={{ margin: "none", fontSize: "xs", fontWeight: 6 }}
      className="white"
      {...props}
    />
  );
}
