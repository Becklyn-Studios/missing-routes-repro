import { ARTICLE_FIELDS } from "@lib/finders/shared/articles";
import { FILTER_TYPES } from "@lib/finders/shared/types";

export default {
    oem: [
        {
            type: FILTER_TYPES.DROPDOWN,
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
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "design",
            field: ARTICLE_FIELDS.DESIGN,
            options: [],
        },
    ],
    retail: [
        {
            type: FILTER_TYPES.DROPDOWN,
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
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "design",
            field: ARTICLE_FIELDS.DESIGN,
            options: [],
        },
    ],
};
