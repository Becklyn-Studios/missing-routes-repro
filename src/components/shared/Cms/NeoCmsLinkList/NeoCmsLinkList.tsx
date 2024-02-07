import React, { PropsWithChildren } from "react";
import "./NeoCmsLinkList.scss";

export interface NeoCmsLinkListProps {}

export const NeoCmsLinkList: React.FC<PropsWithChildren<NeoCmsLinkListProps>> = ({ children }) => (
    <div className="neo-cms-link-list">{children}</div>
);
