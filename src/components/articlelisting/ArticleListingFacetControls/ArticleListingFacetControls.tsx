"use client";

import { NeoArticleFilters } from "@components/shared/NeoArticleListFilters/NeoArticleFilters";
import { NeoButton } from "@components/shared/NeoButton/NeoButton";
import { NeoCheckbox } from "@components/shared/NeoCheckbox/NeoCheckbox";
import { NeoDropdown } from "@components/shared/NeoDropdown/NeoDropdown";
import { NeoSearch } from "@components/shared/NeoSearch/NeoSearch";
import { FILTER_TYPES, FilterType } from "@lib/finders/shared/types";
import { useSetMultipleParams, useSetParams } from "@lib/hook/useSetParams";
import { useTranslation } from "@lib/layers/translate/client";
import { useSearchParams } from "next/navigation";
import React from "react";

export interface ArticleListingFacetControlProps {
    id: string;
    type: FilterType;
    label: string;
    values?: { label: string; value: string; count?: number }[];
    defaultValue?: string;
}

export interface ArticleListingFacetControlsProps {
    facets: ArticleListingFacetControlProps[];
}

export const ArticleListingFacetControls: React.FC<ArticleListingFacetControlsProps> = ({
    facets,
}) => {
    const t = useTranslation();
    const params = useSearchParams();
    const updateParam = useSetParams();
    const updateMultipleParams = useSetMultipleParams();

    const canReset = facets.map(({ id }) => params.get(id)).filter(id => !!id).length > 0;

    const onReset = () => {
        updateMultipleParams(facets.map(({ id }) => ({ query: id, value: "" })));
    };

    const buildFacetFilter = (facet: ArticleListingFacetControlProps) => {
        const value = params.get(facet.id) ?? facet.defaultValue;
        const localizedLabel = t.contentful.text[facet.label];

        switch (facet.type) {
            case FILTER_TYPES.DROPDOWN:
                if (!facet.values) {
                    return;
                }

                return (
                    <NeoDropdown
                        variation="grey"
                        uid={facet.id}
                        key={facet.id}
                        label={localizedLabel}
                        onSelect={e => updateParam(facet.id, e.target.value)}
                        value={value ?? undefined}
                        options={facet.values}
                    />
                );
            case FILTER_TYPES.CHECKBOX:
                return (
                    <NeoCheckbox
                        key={facet.id}
                        checked={value === "true" ? true : false}
                        onChange={console.log}
                        onClick={() =>
                            updateParam(facet.id, value === "true" ? undefined : "true")
                        }>
                        {localizedLabel}
                    </NeoCheckbox>
                );
            case FILTER_TYPES.SEARCH:
                return (
                    <NeoSearch
                        theme="dark"
                        searchParam={facet.id}
                        name={facet.id}
                        uid={facet.id}
                        key={facet.id}
                        autoFocus={false}
                        label={t.contentful.text.articleNumber}
                    />
                );
        }
    };

    return (
        <div className="article-listing-facet-controls grid grid-cols-1 items-start justify-start gap-7">
            <NeoArticleFilters>{facets.map(facet => buildFacetFilter(facet))}</NeoArticleFilters>
            <div className="sm:w-140px w-full">
                <NeoButton disabled={!canReset} variation="secondary" onClick={onReset}>
                    {t.contentful.text.resetAllFilters.toUpperCase()}
                </NeoButton>
            </div>
        </div>
    );
};
