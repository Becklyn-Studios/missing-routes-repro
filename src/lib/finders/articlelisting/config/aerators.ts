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
            label: "withWithoutHousing",
            field: ARTICLE_FIELDS.WITH_WITHOUT_HOUSING,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "flowRate",
            field: ARTICLE_FIELDS.FLOW_RATE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "size",
            field: ARTICLE_FIELDS.SIZE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "streamType",
            field: ARTICLE_FIELDS.STREAM_TYPE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "pressureRange",
            field: ARTICLE_FIELDS.PRESSURE_RANGE,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "flowRegulation",
            field: ARTICLE_FIELDS.HAS_FLOW_REGULATION,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "easyToClean",
            field: ARTICLE_FIELDS.HAS_SLC,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "ssr",
            field: ARTICLE_FIELDS.HAS_SSR,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "autoClean",
            field: ARTICLE_FIELDS.HAS_AC,
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
            label: "withWithoutHousing",
            field: ARTICLE_FIELDS.WITH_WITHOUT_HOUSING,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "flowRate",
            field: ARTICLE_FIELDS.FLOW_RATE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "size",
            field: ARTICLE_FIELDS.SIZE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "streamType",
            field: ARTICLE_FIELDS.STREAM_TYPE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "packaging",
            field: ARTICLE_FIELDS.PACKAGING,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "flowRegulation",
            field: ARTICLE_FIELDS.HAS_FLOW_REGULATION,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "easyToClean",
            field: ARTICLE_FIELDS.HAS_SLC,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "ssr",
            field: ARTICLE_FIELDS.HAS_SSR,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "autoClean",
            field: ARTICLE_FIELDS.HAS_AC,
        },
    ],
};
