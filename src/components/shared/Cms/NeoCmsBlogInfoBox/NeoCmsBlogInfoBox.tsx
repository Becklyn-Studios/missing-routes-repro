import React, { PropsWithChildren } from "react";
import "./NeoCmsBlogInfoBox.scss";

export interface NeoCmsBlogInfoBoxProps {}

export const NeoCmsBlogInfoBox: React.FC<PropsWithChildren<NeoCmsBlogInfoBoxProps>> = ({
    children,
}) => <div className="neo-cms-blog-info-box">{children}</div>;
