import { ensureArray, first } from "@lib/util";
import { createArticleFieldMap, getArticleFieldLookup } from "../shared/fields";
import { ARTICLE_FIELDS, ArticleKey } from "../shared/articles";
import {
    GroupKey,
    getMaingroupFeatureKeyForOpaccId,
    getMaingroupNameForOpaccId,
} from "../shared/groups";
import config from "./config";
import { FALLBACK_MARKET, MarketKey, SortimentKey } from "../shared/sortiments";
import { FALLBACK_LANG, LangKey } from "@lib/i18n/locales";
import { filterValue } from "../shared/filter";
import { FacetMapping } from "../shared/types";
import { SearchParams } from "@type/common";

export const getMaingroupFilterForOpaccId = (opaccId: string) => {
    const groupName = getMaingroupNameForOpaccId(opaccId);
    return config[groupName];
};

export const getFacetMappings = (group: GroupKey, market: MarketKey, lang: LangKey) => {
    const lookup = getArticleFieldLookup(lang);

    if (!lookup) return;

    const facets = getMaingroupFilterForOpaccId(group);

    if (!facets) return;

    const filters = facets[market] ?? facets[FALLBACK_MARKET];

    if (!filters) return;

    /* @ts-ignore */
    return ensureArray(filters)
        .map(facet => {
            if ("field" in facet) {
                const field = facet.field as ArticleKey;
                const fields = lookup(field);
                return {
                    definition: facet,
                    value: fields
                        .flat()
                        .filter(def => def.includes(getMaingroupFeatureKeyForOpaccId(group))),
                };
            }
        })
        .filter(filter => !!filter) as FacetMapping[] | undefined;
};

export interface GetProductsQueryStringProps {
    groupOpaccId: string;
    productLineOpaccIds: string[];
    sortimentId: SortimentKey;
    lang: LangKey;
    filters?: SearchParams;
}

export const getProductsQueryString = ({
    groupOpaccId,
    productLineOpaccIds,
    sortimentId,
    lang = FALLBACK_LANG,
    filters,
}: GetProductsQueryStringProps) => {
    const ids = createArticleFieldMap(lang);
    const productFamilyId = ids[ARTICLE_FIELDS.PRODUCT_FAMILY_ID];
    const sortimentValues = ensureArray(ids[ARTICLE_FIELDS.SORTIMENTS_VALUE]);
    const q = `(maingroup_id:${groupOpaccId}) AND (${[productLineOpaccIds[0]]
        .map(id => `${productFamilyId}:${id}`)
        .join(" OR ")}) AND (type:"article" OR type:"product") AND (${sortimentValues
        .map(key => `${key}:${sortimentId}`)
        .join(" OR ")}) NOT (layout_variant:999) ${
        !!filters && Object.entries(filters).filter(([key, value]) => !!key && !!value).length > 0
            ? `(${Object.entries(filters)
                  .map(([key, value]) => filterValue(key, first(value)))
                  .filter(v => !!v)
                  .join(" AND ")})`
            : ""
    }`.trim();

    return `q=${q}&q.parser=lucene&size=400&start=0`;
};

export interface GetFacetsQueryStringProps extends GetProductsQueryStringProps {
    market: MarketKey;
}

export const getFacetsQueryString = (props: GetFacetsQueryStringProps) => {
    const { groupOpaccId, market, lang = FALLBACK_LANG } = props;
    const base = getProductsQueryString(props);

    const ids = createArticleFieldMap(lang);
    const facets = getMaingroupFilterForOpaccId(groupOpaccId);
    const filters = facets?.[market] ?? facets?.[FALLBACK_MARKET];

    const filterNames = ensureArray(filters)
        .map(
            facet =>
                !!facet &&
                "field" in facet &&
                ensureArray(ids[facet.field as ArticleKey]).find(def =>
                    def.includes(getMaingroupFeatureKeyForOpaccId(groupOpaccId))
                )
        )
        .filter(facet => !!facet);

    return `${base}${filterNames.map(name => `&facet.${name}={size:50}`)}`;
};
