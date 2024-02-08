import { ARTICLE_FIELDS } from "@lib/finders/shared/articles";
import { FILTER_TYPES } from "@lib/finders/shared/types";

export default {
    oem: [
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "flowRate",
            field: ARTICLE_FIELDS.FLOW_RATE,
            options: [],
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "pressureRange",
            field: ARTICLE_FIELDS.PRESSURE_RANGE,
            options: [],
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "boreDiameter",
            field: ARTICLE_FIELDS.BORE_DIAMETER,
            options: [],
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "maxTemperature",
            field: ARTICLE_FIELDS.MAX_TEMPERATURE,
            options: [],
        },
    ],
    retail: [
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "flowRate",
            field: ARTICLE_FIELDS.FLOW_RATE,
            options: [],
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "pressureRange",
            field: ARTICLE_FIELDS.PRESSURE_RANGE,
            options: [],
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "boreDiameter",
            field: ARTICLE_FIELDS.BORE_DIAMETER,
            options: [],
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "maxTemperature",
            field: ARTICLE_FIELDS.MAX_TEMPERATURE,
            options: [],
        },
    ],
};
