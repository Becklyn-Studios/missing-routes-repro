import React, { PropsWithChildren } from "react";
import "./NeoCmsNewsletter.scss";

export const NeoCmsNewsletter: React.FC<PropsWithChildren> = ({ children }) => (
    <div className={"neo-cms-newsletter"}>
        <div className="slot">{children}</div>
    </div>
);
