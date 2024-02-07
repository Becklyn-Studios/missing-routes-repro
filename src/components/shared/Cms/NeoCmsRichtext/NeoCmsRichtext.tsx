import React, { PropsWithChildren } from "react";
import "./NeoCmsRichtext.scss";

export const NeoCmsRichtext: React.FC<PropsWithChildren> = ({ children }) => (
    <div className="neo-cms-richtext">
        <div className="slot">{children}</div>
    </div>
);
