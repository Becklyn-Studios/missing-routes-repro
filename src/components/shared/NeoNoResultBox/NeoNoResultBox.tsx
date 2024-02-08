import React, { PropsWithChildren } from "react";
import "./NeoNoResultBox.scss";

export interface NeoNoResultBoxProps {}

export const NeoNoResultBox: React.FC<PropsWithChildren<NeoNoResultBoxProps>> = ({ children }) => {
    return <div className={"neo-no-result-box"}>{children}</div>;
};
