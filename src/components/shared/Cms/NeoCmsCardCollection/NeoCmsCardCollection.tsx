import React, { PropsWithChildren } from "react";
import { NeoHeadline } from "../../NeoHeadline/NeoHeadline";
import { cn } from "@lib/util";
import "./NeoCmsCardCollection.scss";

export interface NeoCmsCardCollectionProps {
    background?: boolean;
    headline?: string;
    headlineLevel?: number;
}

export const NeoCmsCardCollection: React.FC<PropsWithChildren<NeoCmsCardCollectionProps>> = ({
    headline,
    headlineLevel = 3,
    background,
    children,
}) => (
    <div
        className={cn("neo-cms-card-collection", {
            background: background,
        })}>
        <div
            className={cn("card-collection", {
                [`count-${React.Children.count(children)}`]: children,
            })}>
            {headline && <NeoHeadline level={headlineLevel as 1}>{headline}</NeoHeadline>}
            {children}
        </div>
    </div>
);
