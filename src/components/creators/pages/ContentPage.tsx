"use server";

import React, { PropsWithChildren } from "react";
import { NeoCmsPageIntro } from "@components/shared/Cms/NeoCmsPageIntro/NeoCmsPageIntro";
import { normalizeImage, normalizeVideo } from "@lib/contentful/util";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { PageCreatorProps } from ".";

export interface ContentPageProps extends PageCreatorProps {
    title: string;
    stageHeadline: string;
    stageImage: ContentfulMedia;
    stageVideo?: ContentfulMedia;
    intro: string;
}

export const ContentPage: React.FC<PropsWithChildren<ContentPageProps>> = ({
    title,
    stageHeadline,
    stageImage,
    stageVideo,
    intro,
    children,
    ...props
}) => {
    const pageProps = {
        title,
        headline: stageHeadline ?? title,
        image: normalizeImage(stageImage),
        video: stageVideo && normalizeVideo(stageVideo)?.src,
        leadtext: intro,
        ...props,
    };

    return (
        <>
            <NeoCmsPageIntro {...pageProps} />
            {children}
        </>
    );
};
