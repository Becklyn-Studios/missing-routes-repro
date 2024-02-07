import { ClientOptions, getClient } from "../client";
import { BaseEntryOptions } from "./util";

export const getPageById = async (
    id: string,
    options: BaseEntryOptions = {},
    clientOptions: ClientOptions = {}
) => {
    const client = getClient(clientOptions);
    return await client.getEntry(id, options);
};

export const getCountryPage = async (
    options: BaseEntryOptions,
    clientOptions: ClientOptions = {}
) => {
    const { locale } = options;
    const client = getClient(clientOptions);
    return client.getEntries({
        content_type: "country",
        locale: locale,
        limit: 1,
    });
};
