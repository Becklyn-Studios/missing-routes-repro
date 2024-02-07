import { ContentfulBlogPost } from "@type/contentful/ContentfulBlogPost";
import { ClientOptions, getClient } from "../client";
import { CONTENT_TYPES } from "../contentTypes";
import { normalizer } from "../normalizer";
import { BaseEntriesOptions } from "./util";

export const getBlogPosts = async (
    options: BaseEntriesOptions = {},
    clientOptions: ClientOptions = {}
) => {
    const { limit, locale } = options;
    const client = getClient(clientOptions);
    const posts = await client.getEntries({
        content_type: CONTENT_TYPES.BLOGPOST,
        order: ["-fields.date"],
        limit,
        locale,
    });

    return posts.items.map(post => normalizer(post)) as ContentfulBlogPost[];
};
