"use server";

import { NeoCmsProductPageIntro } from "@components/shared/Cms/NeoCmsProductPageIntro/NeoCmsProductPageIntro";
import { ApplicationType } from "@components/shared/NeoApplicationIcon/NeoApplicationIcon";
import { ContentfulLink } from "@type/contentful/ContentfulLink";
import React, { PropsWithChildren } from "react";
import { normalizeImage, normalizeVideo } from "@lib/contentful/util";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { PageCreatorProps } from ".";

export interface ProductPageProps extends PageCreatorProps {
    title: string;
    stageHeadline: string;
    stageImage: ContentfulMedia;
    stageVideo?: ContentfulMedia;
    intro: string;
    applicationTypes: ApplicationType[];
    featuredLinks: ContentfulLink[];
}

export const ProductPage: React.FC<PropsWithChildren<ProductPageProps>> = ({
    title,
    stageHeadline,
    stageImage,
    stageVideo,
    intro,
    applicationTypes,
    featuredLinks,
    children,
    ...props
}) => {
    const pageProps = {
        title,
        headline: stageHeadline ?? title,
        image: normalizeImage(stageImage),
        video: stageVideo && normalizeVideo(stageVideo)?.src,
        leadtext: intro,
        icons: applicationTypes,
        jumpMarks:
            featuredLinks &&
            featuredLinks.map(link => ({
                href: link.url,
                title: link.title,
                target: "_self",
            })),
        ...props,
    };

    return (
        <>
            <NeoCmsProductPageIntro {...pageProps} />
            {children}
        </>
    );
};
