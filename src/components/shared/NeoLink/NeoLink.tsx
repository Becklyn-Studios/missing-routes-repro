"use client";

import React, { MouseEventHandler, PropsWithChildren } from "react";
import { cn } from "@lib/util";
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
  variant = "dark",
  onClick,
  children,
}) => {
  if (!href && !onClick) {
    return;
  }

  if (href) {
    return (
      <Link
        className={cn("neo-link", variant)}
        href={href}
        target={href?.includes("#") ? "_self" : target}
        style={noUppercase ? { textTransform: "none" } : {}}
      >
        {hideMarker ? null : "›\xa0"}
        {children}
      </Link>
    );
  }

  return (
    <a
      className={cn("neo-link", variant)}
      onClick={onClick}
      target={href?.includes("#") ? "_self" : target}
      style={noUppercase ? { textTransform: "none" } : {}}
    >
      {hideMarker ? null : "›\xa0"}
      {children}
    </a>
  );
};
