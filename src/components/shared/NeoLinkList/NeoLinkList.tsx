import React, { PropsWithChildren } from "react";

export interface NeoLinkListProps {}

export const NeoLinkList: React.FC<PropsWithChildren<NeoLinkListProps>> = ({
  children,
}) => {
  return <div className={"neo-link-list"}>{children}</div>;
};
