import { LangKey } from "@lib/i18n/locales";
import { MarketKey, SortimentKey } from "../shared/sortiments";
import { getFacetsQueryString, getPartByIdQueryString, getProductsQueryString } from "./filters";
import { SearchParams } from "@type/common";

export interface GetFacetsProps {
    group: string;
    market: MarketKey;
    sortimentId: SortimentKey;
    lang: LangKey;
    filters?: SearchParams;
}

export interface GetFacetsFacet {
    buckets: [{ value: string; count: number }];
}

export interface GetFacetsResult {
    hits: {
        found: number;
        start: number;
    };
    facets: { product_family_id: GetFacetsFacet } & Record<string, GetFacetsFacet>;
}

export const getFacets = async (props: GetFacetsProps): Promise<GetFacetsResult> => {
    const { group, market, sortimentId, lang, filters } = props;
    const query = getFacetsQueryString(group, market, sortimentId, lang, filters);
    return await fetch(
        `${process.env.BASE_API_URL}/${process.env.PRODUCT_SEARCH_API_URL}/search?${query}`
    ).then(data => data.json());
};

export interface GetProductsProps {
    group: string;
    opaccIds: string[];
}

export interface GetProductsProduct {
    id: string;
    fields: Record<string, string | string[]>;
}

export interface GetProductsResults {
    hits: {
        found: number;
        start: number;
        hit: GetProductsProduct[];
    };
}

export const getProducts = async ({ group, opaccIds }: GetProductsProps) => {
    const query = getProductsQueryString(group, opaccIds);
    return await fetch(
        `${process.env.BASE_API_URL}/${process.env.PRODUCT_SEARCH_API_URL}/search?${query}`
    ).then(data => data.json() as Promise<GetProductsResults>);
};

export interface GetPartByIdProps {
    articleNumber: string;
}

export const getPartById = async ({ articleNumber }: GetPartByIdProps) => {
    return await fetch(
        `${process.env.BASE_API_URL}/${
            process.env.PRODUCT_SEARCH_API_URL
        }/search?${getPartByIdQueryString(articleNumber)}`
    ).then(data => data.json() as Promise<GetProductsResults>);
};
