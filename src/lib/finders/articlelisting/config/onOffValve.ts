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
            type: FILTER_TYPES.DROPDOWN,
            label: "inflow",
            field: ARTICLE_FIELDS.INFLOW,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "maxFlowRate",
            field: ARTICLE_FIELDS.MAX_FLOW_RATE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "pushButtonConnection",
            field: ARTICLE_FIELDS.PUSH_BUTTON_CONNECTION,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "flowAdjustment",
            field: ARTICLE_FIELDS.FLOW_ADJUSTMENT,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "boreDiameter",
            field: ARTICLE_FIELDS.BORE_DIAMETER,
        },
    ],
    retail: [],
};
