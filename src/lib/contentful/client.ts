import { createClient } from "contentful";

export interface ClientOptions {
    isDraftMode?: boolean;
}

export const getClient = (options?: ClientOptions) => {
    const { isDraftMode } = options ?? {};

    const accessToken = isDraftMode
        ? process.env.CONTENTFUL_DELIVERY_PREVIEW_TOKEN
        : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;

    if (!accessToken) {
        throw new Error("Missing Contentful Access Token environment variable.");
    }

    return createClient({
        space: process.env.CONTENTFUL_SPACE_ID ?? "",
        environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
        accessToken,
        host: isDraftMode ? "preview.contentful.com" : "cdn.contentful.com",
    });
};
