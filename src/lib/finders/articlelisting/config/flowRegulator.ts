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
            type: FILTER_TYPES.MULTISELECT,
            label: "flowRate",
            field: ARTICLE_FIELDS.FLOW_RATE,
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "pressureRange",
            field: ARTICLE_FIELDS.PRESSURE_RANGE,
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "boreDiameter",
            field: ARTICLE_FIELDS.BORE_DIAMETER,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "maxTemperature",
            field: ARTICLE_FIELDS.MAX_TEMPERATURE,
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
            type: FILTER_TYPES.MULTISELECT,
            label: "flowRate",
            field: ARTICLE_FIELDS.FLOW_RATE,
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "pressureRange",
            field: ARTICLE_FIELDS.PRESSURE_RANGE,
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "boreDiameter",
            field: ARTICLE_FIELDS.BORE_DIAMETER,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "maxTemperature",
            field: ARTICLE_FIELDS.MAX_TEMPERATURE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "packaging",
            field: ARTICLE_FIELDS.PACKAGING,
        },
    ],
};
