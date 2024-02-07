import { ContentfulNews } from "@type/contentful/ContentfulNews";
import { ClientOptions, getClient } from "../client";
import { CONTENT_TYPES } from "../contentTypes";
import { normalizer } from "../normalizer";
import { BaseEntriesOptions } from "./util";

export const getNews = async (
    options: BaseEntriesOptions = {},
    clientOptions: ClientOptions = {}
) => {
    const { limit, locale } = options;
    const client = getClient(clientOptions);
    const news = await client.getEntries({
        content_type: CONTENT_TYPES.NEWS,
        limit,
        order: ["-fields.date"],
        locale,
    });

    return news.items.map(news => normalizer(news)) as ContentfulNews[];
};
