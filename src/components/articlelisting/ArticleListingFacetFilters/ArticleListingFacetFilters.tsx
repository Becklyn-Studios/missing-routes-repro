import React from "react";
import { getFacets } from "@lib/finders/articlelisting/api";
import { GetFacetsQueryStringProps, getFacetMappings } from "@lib/finders/articlelisting/filters";
import { ArticleListingFacetControls } from "../ArticleListingFacetControls/ArticleListingFacetControls";
import { ensureArray } from "@lib/util";
import { getTranslation } from "@lib/layers/translate/server";

export interface ArticleListingFacetFiltersProps extends GetFacetsQueryStringProps {
    defaultValues?: Record<string, string>;
}

export const ArticleListingFacetFilters: React.FC<
    ArticleListingFacetFiltersProps
> = async props => {
    const t = getTranslation();
    const { groupOpaccId, market, lang } = props;
    const { defaultValues = {}, filters: _, ...args } = props;
    const facetResults = await getFacets(args);

    const facets =
        getFacetMappings(groupOpaccId, market, lang)?.flatMap(mapping => {
            if (!mapping) {
                return [];
            }

            const { definition, value } = mapping;

            if (!definition || !definition.field) {
                return [];
            }

            const field = definition.field;

            if (!value) {
                return {
                    id: definition.field,
                    ...definition,
                    values: undefined,
                    defaultValue: defaultValues[field],
                };
            }

            if (definition?.options) {
                return {
                    id: definition.field,
                    ...definition,
                    values: definition.options.map(({ label }: any) => ({
                        label: t.contentful.text[label],
                        value: label,
                    })),
                    defaultValue: defaultValues[field],
                };
            }

            const line = ensureArray(value).find(line => facetResults.facets[line]);

            if (!line) {
                return [];
            }

            const target = facetResults.facets[line];

            if (!target) {
                return [];
            }

            return {
                id: line,
                ...definition,
                values:
                    target?.buckets.map(({ value, count }) => ({ label: value, value, count })) ??
                    [],
                defaultValue: defaultValues[field],
            };
        }) ?? [];

    return (
        <div className="article-listing-facet-filters">
            <ArticleListingFacetControls facets={facets} />
        </div>
    );
};
