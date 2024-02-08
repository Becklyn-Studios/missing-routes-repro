import { ensureArray, first } from "@lib/util";
import { createArticleFieldMap } from "../shared/fields";
import { ARTICLE_FIELDS } from "../shared/articles";
import { getMaingroupFeatureKeyForOpaccId, getMaingroupNameForOpaccId } from "../shared/groups";
import { config } from "./config";
import { FacetMapping } from "../shared/types";
import { filterValue } from "../shared/filter";
import { FALLBACK_MARKET, MarketKey, SortimentKey } from "../shared/sortiments";
import { FALLBACK_LANG, LangKey } from "@lib/i18n/locales";
import { SearchParams } from "@type/common";

export const getMaingroupFilterForOpaccId = (opaccId: string) => {
    const groupName = getMaingroupNameForOpaccId(opaccId);
    return config[groupName];
};

export const getFacetMappings = (group: string, market: MarketKey, lang: LangKey) => {
    const ids = createArticleFieldMap(lang);

    if (!ids) return;

    const facets = getMaingroupFilterForOpaccId(group);

    if (!facets) return;

    const filters = facets[market] ?? facets[FALLBACK_MARKET];

    if (!filters) return;

    /* @ts-ignore */
    return ensureArray(filters)
        .map(facet => ({
            definition: facet,
            value: ensureArray(ids[facet.field]).find(def =>
                def.includes(getMaingroupFeatureKeyForOpaccId(group))
            ),
        }))
        .filter(({ value }) => !!value) as FacetMapping[] | undefined;
};

const getRegionFilters = (sortimentId: SortimentKey, lang: LangKey = FALLBACK_LANG) => {
    const ids = createArticleFieldMap(lang);

    if (ids) {
        const target = ids[ARTICLE_FIELDS.SORTIMENTS_VALUE];

        if (Array.isArray(target)) {
            return `(${target.map(id => `${id}:${sortimentId}`).join(" OR ")})`;
        }
    }
};

const getFacetFilters = (group: string, market: MarketKey, lang: LangKey) => {
    const ids = createArticleFieldMap(lang);

    if (!ids) return;

    const facets = getMaingroupFilterForOpaccId(group);
    const productFamilyId = ids[ARTICLE_FIELDS.PRODUCT_FAMILY_ID];

    if (!facets) {
        return;
    }

    const filters = facets[market] ?? facets[FALLBACK_MARKET];

    if (!filters) {
        return;
    }

    // TODO: Not sure how this should work
    // Check neoperl-frontend/public/productfinder/sagas/renderSaga.ts:254
    /*
    if (!filters || sortimentId) {
      filters = facets[market];
    }
    */

    /* @ts-ignore */
    const filterNames = ensureArray(filters)
        .map(facet =>
            ensureArray(ids[facet.field]).find(def =>
                def.includes(getMaingroupFeatureKeyForOpaccId(group))
            )
        )
        .filter(facet => !!facet);

    return [...filterNames, productFamilyId]
        .filter(facet => !!facet)
        .map(facet => `facet.${facet}={size:50}`)
        .join("&");
};

export const getFacetsQueryString = (
    group: string,
    market: MarketKey,
    sortimentId: SortimentKey,
    lang: LangKey = FALLBACK_LANG,
    filters?: SearchParams
) => {
    const q = `(type:"product" OR type:"article") AND ${getRegionFilters(
        sortimentId,
        lang
    )} AND (maingroup_id:${group}) ${
        filters && Object.entries(filters).filter(([key, value]) => !!key && !!value).length > 0
            ? `AND (${Object.entries(filters)
                  .map(([key, value]) => filterValue(key, first(value)))
                  .filter(v => !!v)
                  .join(" AND ")})`
            : ""
    } NOT (layout_variant:999)`;

    const facets = getFacetFilters(group, market, lang);

    return `q=${q}&q.parser=lucene&size=0&${facets}`;
};

export const getProductsQueryString = (group: string, opaccIds: string[]) => {
    const q = `(type:"structure3") AND (maingroup_id:${group}) AND (${opaccIds
        .map(id => `opacc_id:${id}`)
        .join(" OR ")})`;

    return `q=${q}&q.parser=lucene&size=1000&start=0`;
};

export const getPartByIdQueryString = (id: string): string => {
    return `q=(number:${id}*) AND (type:"product" OR type:"article") NOT (layout_variant:999)&q.parser=lucene&size=1000&start=0`;
};
