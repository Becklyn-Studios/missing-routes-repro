import { LocaleKey } from "@lib/i18n/locales";

export type IncludeOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface BaseEntriesOptions {
    locale?: LocaleKey;
    limit?: number;
    include?: IncludeOption;
}

export interface BaseEntryOptions {
    locale?: LocaleKey;
    include?: IncludeOption;
}
