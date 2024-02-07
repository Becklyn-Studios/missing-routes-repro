import { NeoCmsBlogPostOverview } from "@components/shared/Cms/NeoCmsBlogPostOverview/NeoCmsBlogPostOverview";
import { NeoBlogPostOverviewTeaser } from "@components/shared/NeoBlogPostOverviewTeaser/NeoBlogPostOverviewTeaser";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { getBlogPosts } from "@lib/contentful/api/blogPosts";
import { normalizeDateFormatForLanguage, normalizeImage } from "@lib/contentful/util";
import { getNotableUrls } from "@lib/layers/notables/server";
import { getCurrentLocale } from "@lib/layers/state/server";
import { Rte } from "@lib/rte";
import { draftMode } from "next/headers";
import React from "react";

export interface BlogCollectionProps {
    showAllPosts?: "Yes";
    linkToAllPosts?: any;
}

export const BlogCollection: React.FC<BlogCollectionProps> = async () => {
    const { isEnabled } = draftMode();
    const locale = getCurrentLocale();
    const posts = await getBlogPosts({ locale }, { isDraftMode: isEnabled });
    const { blogUrl } = getNotableUrls();

    const buildBlogLink = (slug?: string) => {
        return `/${blogUrl}/${slug ?? ""}`;
    };

    return (
        <NeoCmsBlogPostOverview>
            {posts.map(
                (
                    { slug, title, date, author, teaserImage, teaserDescription, teaserGold, tags },
                    key
                ) => (
                    <NeoBlogPostOverviewTeaser
                        key={key}
                        teaserGold={teaserGold}
                        linkUrl={buildBlogLink(slug)}
                        image={normalizeImage(teaserImage, { alt: title })}
                        date={normalizeDateFormatForLanguage(date, locale)}
                        author={author}
                        tags={tags}>
                        <NeoHeadline level={3}>{title}</NeoHeadline>
                        <Rte content={teaserDescription} />
                    </NeoBlogPostOverviewTeaser>
                )
            )}
        </NeoCmsBlogPostOverview>
    );
};
