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
            label: "design",
            field: ARTICLE_FIELDS.DESIGN,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "connectionThread",
            field: ARTICLE_FIELDS.CONNECTION_THREAD,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "outletPressure",
            field: ARTICLE_FIELDS.OUTLET_PRESSURE,
        },
    ],
    retail: [],
};
