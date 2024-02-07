"use server";

import React, { PropsWithChildren } from "react";
import { NeoCmsPageIntro } from "@components/shared/Cms/NeoCmsPageIntro/NeoCmsPageIntro";
import { normalizeImage } from "@lib/contentful/util";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { PageCreatorProps } from ".";

export interface NewsPageProps extends PageCreatorProps {
    title: string;
    stageHeadline: string;
    teaserImage: ContentfulMedia;
    intro: string;
    date: string;
}

export const NewsPage: React.FC<PropsWithChildren<NewsPageProps>> = ({
    title,
    stageHeadline,
    teaserImage,
    intro,
    date,
    children,
    ...props
}) => {
    const pageProps = {
        headline: stageHeadline ?? title,
        image: normalizeImage(teaserImage),
        leadtext: intro,
        date,
        ...props,
    };

    return (
        <>
            <NeoCmsPageIntro {...pageProps} />
            {children}
        </>
    );
};
