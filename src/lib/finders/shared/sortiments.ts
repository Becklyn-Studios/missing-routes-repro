export const OEM_IDS = {
    GLOBAL: "1",
    USA: "2",
    INDIEN: "3",
    CHINA: "4",
} as const;

export const RETAIL_IDS = {
    EUROPE: "5",
    GERMANY_AUSTRIA_BENELUX: "6",
    SWITZERLAND: "7",
    ITALY: "8",
    FRANCE: "9",
    SPAIN_FRANCE: "10",
    USA: "11",
    RUSSIA: "12",
} as const;

export const SORTIMENT_RETAIL = {
    germany: RETAIL_IDS.GERMANY_AUSTRIA_BENELUX,
    austria: RETAIL_IDS.GERMANY_AUSTRIA_BENELUX,
    belgium: RETAIL_IDS.GERMANY_AUSTRIA_BENELUX,
    netherlands: RETAIL_IDS.GERMANY_AUSTRIA_BENELUX,
    luxemburg: RETAIL_IDS.GERMANY_AUSTRIA_BENELUX,
    portugal: RETAIL_IDS.SPAIN_FRANCE,
    spain: RETAIL_IDS.SPAIN_FRANCE,
    france: RETAIL_IDS.FRANCE,
    italy: RETAIL_IDS.ITALY,
    russia: RETAIL_IDS.RUSSIA,
    switzerland: RETAIL_IDS.SWITZERLAND,
    europe: RETAIL_IDS.EUROPE,
} as const;

export const SORTIMENT_GLOBAL = {
    global: OEM_IDS.GLOBAL,
} as const;

export const SORTIMENT_MAP = {
    oem: SORTIMENT_GLOBAL,
    retail: SORTIMENT_RETAIL,
} as const;

export const FALLBACK_RETAIL_SORTIMENT = "5";
export const FALLBACK_OEM_SORTIMENT = "1";
export const FALLBACK_SORTIMENT = FALLBACK_OEM_SORTIMENT;

export const FALLBACK_MARKET = "oem";
export const FALLBACK_COUNTRY = "germany";

export type MarketKey = keyof typeof SORTIMENT_MAP;

export type SortimentMarketMapKey = keyof typeof SORTIMENT_MAP;

export type SortimentRegionKey = keyof typeof SORTIMENT_GLOBAL | keyof typeof SORTIMENT_RETAIL;

export type SortimentKey =
    | (typeof OEM_IDS)[keyof typeof OEM_IDS]
    | (typeof RETAIL_IDS)[keyof typeof RETAIL_IDS];

export const getAllRegionsForMarket = (market: SortimentMarketMapKey) => SORTIMENT_MAP[market];

export interface SortimentDefinition {
    market: SortimentMarketMapKey;
    country: SortimentRegionKey;
}

export const getSortimentIdFor = (sortimentdefinition: Partial<SortimentDefinition>) => {
    const { market, country } = sortimentdefinition;

    if (!market) {
        return FALLBACK_RETAIL_SORTIMENT;
    }

    if (!country) {
        return market === "retail" ? FALLBACK_RETAIL_SORTIMENT : FALLBACK_OEM_SORTIMENT;
    }

    /* @ts-ignore */
    return SORTIMENT_MAP?.[sortimentdefinition.market]?.[sortimentdefinition.country];
};

export const getMarketKeyForSortimentId = (sortimentId: string) => {
    if (Object.values(SORTIMENT_MAP.retail).indexOf(sortimentId as any) !== -1) {
        return "RETAIL";
    }
    if (Object.values(SORTIMENT_MAP.oem).indexOf(sortimentId as any) !== -1) {
        return "OEM";
    }
    return null;
};
