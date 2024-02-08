import React, { PropsWithChildren } from "react";
import "./NeoArticleFilters.scss";

export const NeoArticleFilters: React.FC<PropsWithChildren> = ({ children }) => (
    <div className="neo-article-filters">{children}</div>
);
