import React from "react";
import { NeoCmsVideo } from "@components/shared/Cms/NeoCmsVideo/NeoCmsVideo";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { NeoVideo } from "@components/shared/NeoVideo/NeoVideo";
import { normalizeHeadlineLevel } from "@lib/contentful/util";

export interface VideoProps {
    headline?: string;
    headlineType?: string;
    youtubeId?: string;
    caption: string;
    copyright: string;
}

export const Video: React.FC<VideoProps> = ({ headline, headlineType, youtubeId, ...props }) => {
    return (
        <NeoCmsVideo>
            {headline && (
                <NeoHeadline level={normalizeHeadlineLevel(headlineType)}>{headline}</NeoHeadline>
            )}
            {youtubeId && <NeoVideo youtubeId={youtubeId} {...props} />}
        </NeoCmsVideo>
    );
};
