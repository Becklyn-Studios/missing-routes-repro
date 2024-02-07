import React, { PropsWithChildren } from "react";
import "./NeoCmsTeaser.scss";

export const NeoCmsTeaser: React.FC<PropsWithChildren> = ({ children }) => (
    <div className={"neo-cms-teaser"}>
        <div className={"cms-teaser"}>
            <div className={"slot"}>{children}</div>
        </div>
    </div>
);
