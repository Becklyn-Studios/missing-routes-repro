const REGION_GLOBAL = {
    en: "en",
    de: "de",
    fr: "fr",
    it: "it",
    ja: "ja",
    es: "es",
} as const;

const REGION_CH = {
    de: "de-CH",
    fr: "fr-CH",
    it: "it-CH",
} as const;

const REGION_DE = {
    de: "de-DE",
} as const;

export const FALLBACK_REGION = "global";
export const FALLBACK_LOCALE = "en";
export const FALLBACK_LANG = "en";

export type LangGlobalKey = keyof typeof REGION_GLOBAL;
export type LangChKey = keyof typeof REGION_CH;
export type LangDeKey = keyof typeof REGION_DE;

export type LangKey = LangChKey | LangGlobalKey | LangDeKey;

export type LocaleKey =
    | (typeof REGION_GLOBAL)[LangGlobalKey]
    | (typeof REGION_CH)[LangChKey]
    | (typeof REGION_DE)[LangDeKey];

const i18n = {
    global: REGION_GLOBAL,
    ch: REGION_CH,
    de: REGION_DE,
};

export type RegionKey = keyof typeof i18n;

export const getRegions = () => {
    return Object.keys(i18n) as RegionKey[];
};

export const getLangsForRegion = (region: RegionKey) => {
    if (region in i18n) {
        return Object.keys(i18n[region]) as LangKey[];
    }
};

export const getRegionsForLang = (lang: LangKey) =>
    Array.from(
        new Set(
            getAvailableI18nPairs()
                .filter(({ lang: other }) => other === lang)
                .map(({ region }) => region)
        )
    );

export const getAvailableI18nPairs = () => {
    return Object.entries(i18n).flatMap(([key, region]) =>
        Object.entries(region).map(([lang, locale]) => ({
            region: key as RegionKey,
            locale: locale as LocaleKey,
            lang: lang as LangKey,
        }))
    );
};

export const getI18nFromRegionAndLang = (props: { region?: RegionKey; lang?: LangKey } = {}) => {
    const region = (props.region ?? Object.keys(i18n)[0]) as RegionKey;
    let lang = (props.lang ?? Object.keys(i18n[region])[0]) as LangKey;

    if (!(lang in i18n[region])) {
        lang = Object.keys(i18n[region])[0] as LangKey;
    }

    /* @ts-ignore */
    const locale = i18n[region][lang] as LocaleKey;
    return { locale, lang, region };
};

export const getI18nFromLocale = (locale: LocaleKey) => {
    const map = Object.entries(i18n).flatMap(([region, values]) =>
        Object.entries(values).map(([lang, locale]) => ({ region, lang, locale }))
    );

    const target = map.find(({ locale: otherLocale }) => locale === otherLocale);

    if (target) {
        return target as { locale: LocaleKey; lang: LangKey; region: RegionKey };
    }
};
