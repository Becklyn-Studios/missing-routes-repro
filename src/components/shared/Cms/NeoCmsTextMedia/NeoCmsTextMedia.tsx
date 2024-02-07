import React, { PropsWithChildren } from "react";
import "./NeoCmsTextMedia.scss";
import { cn } from "@lib/util";

export type NeoCmsTextMediaOrder = "" | "mediaTop" | "mediaLeft" | "mediaRight" | "mediaBottom";

export interface NeoCmsTextMediaProps {
    isMediaFirst?: boolean;
    hasBackground?: boolean;
    noMedia?: boolean;
    mediaSmall?: boolean;
    order?: NeoCmsTextMediaOrder;
}

export const NeoCmsTextMedia: React.FC<PropsWithChildren<NeoCmsTextMediaProps>> = ({
    isMediaFirst = true,
    hasBackground = false,
    order = "mediaLeft",
    noMedia = false,
    mediaSmall = false,
    children,
}) => {
    return (
        <div
            className={cn("neo-cms-text-media", order, {
                isContentFirst: !isMediaFirst,
                background: hasBackground,
                noMedia: noMedia,
                mediaSmall: mediaSmall,
            })}>
            <div className="text-media media">{children}</div>
        </div>
    );
};
