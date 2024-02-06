"use client";

import React, { MouseEventHandler, PropsWithChildren } from "react";
import Link from "next/link";

export interface NeoLinkProps {
  href?: string;
  target?: string;
  noUppercase?: boolean;
  hideMarker?: boolean;
  variant?: NeoLinkVariant;
  onClick?: MouseEventHandler;
}

export type NeoLinkVariant = "light" | "light-small" | "dark";

export const NeoLink: React.FC<PropsWithChildren<NeoLinkProps>> = ({
  href,
  target,
  noUppercase,
  hideMarker,
  onClick,
  children,
}) => {
  if (!href) {
    return;
  }

  return (
    <Link
      className={"neo-link"}
      href={onClick ? "#" : href}
      onClick={onClick}
      target={href.includes("#") ? "_self" : target}
      style={noUppercase ? { textTransform: "none" } : {}}
    >
      {hideMarker ? null : "›\xa0"}
      {children}
    </Link>
  );
};
