import { NeoCmsTeaser } from "@components/shared/Cms/NeoCmsTeaser/NeoCmsTeaser";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { NeoTeaser } from "@components/shared/NeoTeaser/NeoTeaser";
import { normalizeHeadlineLevel, normalizeImage } from "@lib/contentful/util";
import { Rte } from "@lib/rte";
import { ContentfulLink } from "@type/contentful/ContentfulLink";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { ContentfulRichText } from "@type/contentful/ContentfulRichText";
import React from "react";

export interface TeaserProps {
    headlineLevel: string;
    headline: string;
    image: ContentfulMedia;
    imageAlignment: boolean;
    highlightText: string;
    text: ContentfulRichText;
    link: ContentfulLink;
}

export const Teaser: React.FC<TeaserProps> = ({
    headlineLevel,
    headline,
    image,
    imageAlignment,
    link,
    highlightText,
    text,
}) => {
    return (
        <NeoCmsTeaser>
            {headline && (
                <NeoHeadline level={normalizeHeadlineLevel(headlineLevel)}>{headline}</NeoHeadline>
            )}
            <NeoTeaser
                image={normalizeImage(image)}
                variant={imageAlignment ? undefined : "image-right"}
                linkUrl={link?.url}
                linkText={link?.title}>
                <NeoHeadline level={normalizeHeadlineLevel(headlineLevel)}>
                    {highlightText}
                </NeoHeadline>
                <Rte content={text} />
            </NeoTeaser>
        </NeoCmsTeaser>
    );
};
