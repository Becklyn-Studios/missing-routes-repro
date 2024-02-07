import { cn } from "@lib/util";
import React, { ElementType, HTMLAttributes, PropsWithChildren } from "react";

export interface NeoListProps {
  ordered?: boolean;
}

interface ListItemProps {
  children: string;
}

export const NeoList: React.FC<PropsWithChildren<NeoListProps>> = ({
  ordered = false,
  children,
}) => {
  const Tag = ordered
    ? `ol`
    : ("ul" as ElementType<HTMLAttributes<HTMLElement>>);
  const listItems: ListItemProps[] = [];
  React.Children.map(children, (child) => {
    if (React.isValidElement(child) && "li" === child.type) {
      listItems.push({
        children: child.props.children,
      });
    }
  });

  return (
    <Tag
      className={cn({
        "neo-list": true,
        "neo-list-ordered": ordered,
      })}
    >
      {listItems.map((item, index) => (
        <li key={index} className={"neo-list-item"}>
          {item.children}
        </li>
      ))}
    </Tag>
  );
};
