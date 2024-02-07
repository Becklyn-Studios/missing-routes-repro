import React, { PropsWithChildren } from "react";
import { cn } from "@lib/util";
import "./NeoCmsContactCollection.scss";
import { NeoHeadline, NeoHeadlineLevel } from "@components/shared/NeoHeadline/NeoHeadline";

export interface NeoCmsContactCollectionProps {
    background?: boolean;
    headline?: string;
    headlineLevel?: NeoHeadlineLevel;
    single: boolean;
}

export const NeoCmsContactCollection: React.FC<PropsWithChildren<NeoCmsContactCollectionProps>> = ({
    headline,
    headlineLevel = 2,
    background,
    single,
    children,
}) => (
    <div
        className={cn("neo-cms-contact-collection", {
            multiple: !single,
            background: background,
        })}>
        <div className="contactCollection">
            {headline && <NeoHeadline level={headlineLevel}>{headline}</NeoHeadline>}
            {children}
        </div>
    </div>
);
