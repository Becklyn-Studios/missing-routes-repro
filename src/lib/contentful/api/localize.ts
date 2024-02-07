import { ClientOptions, getClient } from "../client";
import { normalizer } from "../normalizer";
import { CONTENT_TYPES } from "../contentTypes";
import { BaseEntriesOptions } from "./util";

export interface LocalizationEntry {
    key: string;
    translation: string;
}

export const getLocalizedTexts = async (
    options: BaseEntriesOptions = {},
    clientOptions: ClientOptions = {}
) => {
    const { locale } = options;
    const client = getClient(clientOptions);
    const data = await client.getEntries({
        content_type: CONTENT_TYPES.LOCALIZED_TEXT,
        locale,
        limit: 400,
    });

    if (!data) {
        throw new Error("No localized texts found.");
    }

    return normalizer(data.items) as LocalizationEntry[];
};

export const getLocalizedRichTexts = async (
    options: BaseEntriesOptions = {},
    clientOptions: ClientOptions = {}
) => {
    const { locale } = options;
    const client = getClient(clientOptions);
    const data = await client.getEntries({
        content_type: CONTENT_TYPES.LOCALIZED_RICHTEXT,
        locale,
        limit: 400,
    });

    if (!data) {
        throw new Error("No localized texts found.");
    }

    return normalizer(data.items) as LocalizationEntry[];
};
