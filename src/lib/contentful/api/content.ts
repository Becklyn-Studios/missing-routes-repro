import { ContentfulContent } from "@type/contentful/ContentfulContent";
import { ClientOptions, getClient } from "../client";
import { normalizer } from "../normalizer";
import { BaseEntriesOptions } from "./util";

export const getContent = async (
    id: string,
    options: BaseEntriesOptions = {},
    clientOptions: ClientOptions = {}
) => {
    const { include = 1, locale } = options;
    const client = getClient(clientOptions);
    const data = await client.getEntry(id, {
        include,
        locale,
    });

    return normalizer(data) as ContentfulContent;
};
