import { NeoHeadline, NeoHeadlineLevel } from "@components/shared/NeoHeadline/NeoHeadline";
import React, { PropsWithChildren } from "react";
import "./NeoCmsTable.scss";

export interface NeoCmsTableProps {
    headline?: string;
    headlineLevel?: NeoHeadlineLevel;
}

export const NeoCmsTable: React.FC<PropsWithChildren<NeoCmsTableProps>> = ({
    headline,
    headlineLevel = 3,
    children,
}) => (
    <div className="neo-cms-table">
        {headline && <NeoHeadline level={headlineLevel}>{headline}</NeoHeadline>}
        <div className="table__wrapper">{children}</div>
    </div>
);
