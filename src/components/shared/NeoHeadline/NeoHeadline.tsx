import React, { ElementType, HTMLAttributes, PropsWithChildren } from "react";

export const NeoHeadline: React.FC<PropsWithChildren<any>> = ({
  level = 1,
  children,
}) => {
  const headline = Math.max(level, Math.min(level, 4), 1);
  const Tag = `h${headline}` as ElementType<HTMLAttributes<HTMLElement>>;
  return <Tag className={`neo-headline level-${headline}`}>{children}</Tag>;
};
