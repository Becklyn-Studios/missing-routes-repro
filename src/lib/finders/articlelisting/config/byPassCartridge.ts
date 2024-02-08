import { ARTICLE_FIELDS } from "@lib/finders/shared/articles";
import { FILTER_TYPES } from "@lib/finders/shared/types";

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
            label: "boreDiameter",
            field: ARTICLE_FIELDS.BORE_DIAMETER,
        },
        {
            type: FILTER_TYPES.MULTISELECT,
            label: "pressureLoss",
            field: ARTICLE_FIELDS.PRESSURE_LOSS,
        },
    ],
    retail: [],
};
