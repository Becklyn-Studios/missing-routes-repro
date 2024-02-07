import { NeoCmsImage } from "@components/shared/Cms/NeoCmsImage/NeoCmsImage";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { NeoImage } from "@components/shared/NeoImage/NeoImage";
import { normalizeHeadlineLevel, normalizeImage } from "@lib/contentful/util";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import React from "react";

export interface ImageProps {
    headline?: string;
    file: ContentfulMedia;
    caption?: string;
    copyright?: string;
    imageSize: "Big" | "Medium" | "Small";
    headlineType: string;
    description: string;
}

export const Image: React.FC<ImageProps> = ({
    headline,
    headlineType,
    description,
    file,
    imageSize,
    ...props
}) => {
    const { src, alt } = normalizeImage(file, { alt: description }) ?? {};
    return (
        <NeoCmsImage
            variant={imageSize === "Big" ? "wide" : imageSize === "Small" ? "small" : undefined}>
            {headline && (
                <NeoHeadline level={normalizeHeadlineLevel(headlineType)}>{headline}</NeoHeadline>
            )}
            {src && <NeoImage {...props} src={src} alt={alt ?? ""} />}
        </NeoCmsImage>
    );
};
