import React, { PropsWithChildren } from "react";
import "./NeoCmsArticleListing.scss";

export const NeoCmsArticleListing: React.FC<PropsWithChildren> = ({ children }) => (
    <div id="finder" className="neo-cms-article-listing">
        {children}
    </div>
);
