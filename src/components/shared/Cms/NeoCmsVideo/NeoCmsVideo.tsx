import React, { PropsWithChildren } from "react";
import "./NeoCmsVideo.scss";

export interface NeoCmsVideoProps {}

export const NeoCmsVideo: React.FC<PropsWithChildren<NeoCmsVideoProps>> = ({ children }) => (
    <div className={"neo-cms-video"}>{children}</div>
);
