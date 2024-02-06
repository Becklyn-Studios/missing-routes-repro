import React, { ElementType, HTMLAttributes, PropsWithChildren } from "react";

export type NeoHeadlineLevel = 1 | 2 | 3 | 4;

export interface NeoHeadlineProps {
  level?: NeoHeadlineLevel;
}

export const NeoHeadline: React.FC<PropsWithChildren<NeoHeadlineProps>> = ({
  level = 1,
  children,
}) => {
  const headline = Math.max(level, Math.min(level, 4), 1);
  const Tag = `h${headline}` as ElementType<HTMLAttributes<HTMLElement>>;
  return <Tag className={`neo-headline level-${headline}`}>{children}</Tag>;
};
