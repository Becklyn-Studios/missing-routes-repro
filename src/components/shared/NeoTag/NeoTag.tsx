import React, { PropsWithChildren } from "react";
import "./NeoTag.scss";

export interface NeoTagProps {}

export const NeoTag: React.FC<PropsWithChildren<NeoTagProps>> = ({ children }) => {
    return <div className={"neo-tag"}>{children}</div>;
};
