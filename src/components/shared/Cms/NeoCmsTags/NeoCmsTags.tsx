import React, { PropsWithChildren } from "react";
import "./NeoCmsTags.scss";

export interface NeoCmsTagsProps {}

export const NeoCmsTags: React.FC<PropsWithChildren<NeoCmsTagsProps>> = ({ children }) => (
    <div className="neo-cms-tags">{children}</div>
);
