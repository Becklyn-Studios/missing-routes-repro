import React from "react";
import { NeoCmsNewsTeaserCollection } from "@components/shared/Cms/NeoCmsNewsTeaserCollection/NeoCmsNewsTeaserCollection";
import { NeoCard } from "@components/shared/NeoCard/NeoCard";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { getNews } from "@lib/contentful/api/news";
import {
    normalizeDateFormatForLanguage,
    normalizeHeadlineLevel,
    normalizeImage,
} from "@lib/contentful/util";
import { draftMode } from "next/headers";
import { getCurrentLocale } from "@lib/layers/state/server";
import { getTranslation } from "@lib/layers/translate/server";
import { getNotableUrls } from "@lib/layers/notables/server";

export interface NewsCollectionProps {
    headline: string;
    headlineLevel?: string;
    linkToAllNews?: {
        title: string;
        url: string;
    };
    showAllNews?: "Yes";
}

export const NewsCollection: React.FC<NewsCollectionProps> = async ({
    headline,
    headlineLevel,
    showAllNews,
    linkToAllNews,
}) => {
    const { isEnabled } = draftMode();
    const locale = getCurrentLocale();
    const news = await getNews(
        { limit: showAllNews ? undefined : 3, locale },
        { isDraftMode: isEnabled }
    );
    const t = getTranslation();
    const { newsUrl } = getNotableUrls();

    const buildNewsLink = (slug?: string) => {
        return `/${newsUrl}/${slug ?? ""}`;
    };

    return (
        <NeoCmsNewsTeaserCollection
            headline={headline}
            headlineLevel={normalizeHeadlineLevel(headlineLevel)}
            link={linkToAllNews}>
            {news.map(({ title, teaserImage, intro, date, slug }, key) => (
                <NeoCard
                    key={key}
                    date={normalizeDateFormatForLanguage(date, locale)}
                    image={normalizeImage(teaserImage, { alt: title })}
                    linkText={t.contentful.text.more}
                    linkUrl={buildNewsLink(slug)}
                    linkTarget="_self">
                    <NeoHeadline level={4}>{title}</NeoHeadline>
                    <NeoParagraph>{intro}</NeoParagraph>
                </NeoCard>
            ))}
        </NeoCmsNewsTeaserCollection>
    );
};
