import { NeoHeadline, NeoHeadlineLevel } from "@components/shared/NeoHeadline/NeoHeadline";
import React, { PropsWithChildren } from "react";
import "./NeoCmsTileCollection.scss";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { NeoButton } from "@components/shared/NeoButton/NeoButton";
import { cn } from "@lib/util";

export interface NeoCmsTileCollectionProps {
    headline?: string;
    headlineLevel?: NeoHeadlineLevel;
    subline?: string;
    button?: {
        title: string;
        url: string;
        target: string;
    };
    maxTilesPerRow?: 2 | 3 | 4;
}

export const NeoCmsTileCollection: React.FC<PropsWithChildren<NeoCmsTileCollectionProps>> = ({
    headline,
    headlineLevel = 2,
    subline,
    button,
    maxTilesPerRow,
    children,
}) => (
    <div
        className={cn("neo-cms-tile-collection", {
            [`max-tiles-per-row-${maxTilesPerRow}`]: maxTilesPerRow,
        })}>
        {headline && <NeoHeadline level={headlineLevel}>{headline}</NeoHeadline>}
        {subline && <NeoParagraph>{subline}</NeoParagraph>}
        {children}
        {button && (
            <div className="button-container">
                <NeoButton href={button.url} target={button.target}>
                    {button.title}
                </NeoButton>
            </div>
        )}
    </div>
);
