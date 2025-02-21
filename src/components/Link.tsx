import React from "react";
import {
  Link as UiLink,
  UnstyledLink as UiUnstyledLink,
} from "@adamjanicki/ui";
import { classNames } from "@adamjanicki/ui/functions";

type Props = React.ComponentProps<typeof UiUnstyledLink>;

const processProps = (props: Props): Props => {
  const internal = props.to.startsWith("/") || props.to.startsWith("#");
  if (!internal) {
    props = { ...props, rel: "noopener noreferrer", target: "_blank" };
  }

  return props;
};

export const Link = ({ className, ...props }: Props) => (
  <UiLink {...processProps(props)} className={classNames("fw5", className)} />
);
export const UnstyledLink = (props: Props) => (
  <UiUnstyledLink {...processProps(props)} />
);
