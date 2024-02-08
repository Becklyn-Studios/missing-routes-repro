import { ARTICLE_FIELDS } from "@lib/finders/shared/articles";
import { FILTER_TYPES } from "@lib/finders/shared/types";
import { getRetailCountryOptions } from "./util";

export default {
    oem: [
        {
            type: FILTER_TYPES.SEARCH,
            label: "articleNumber",
            field: ARTICLE_FIELDS.ARTICLE_NUMBER,
        },
        /*
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "country",
            field: ARTICLE_FIELDS.SORTIMENTS_VALUE,
            options: getOemCountryOptions(),
        },
        */
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "upstreamThread",
            field: ARTICLE_FIELDS.UPSTREAM_THREAD,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "downstreamThread",
            field: ARTICLE_FIELDS.DOWNSTREAM_THREAD,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "surface",
            field: ARTICLE_FIELDS.SURFACE,
        },
    ],
    retail: [
        {
            type: FILTER_TYPES.SEARCH,
            label: "articleNumber",
            field: ARTICLE_FIELDS.ARTICLE_NUMBER,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "country",
            field: ARTICLE_FIELDS.SORTIMENTS_VALUE,
            options: getRetailCountryOptions(),
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "upstreamThread",
            field: ARTICLE_FIELDS.UPSTREAM_THREAD,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "downstreamThread",
            field: ARTICLE_FIELDS.DOWNSTREAM_THREAD,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "surface",
            field: ARTICLE_FIELDS.SURFACE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "packaging",
            field: ARTICLE_FIELDS.PACKAGING,
        },
    ],
};
