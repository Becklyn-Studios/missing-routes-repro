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
            label: "material",
            field: ARTICLE_FIELDS.MATERIAL,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "operation",
            field: ARTICLE_FIELDS.OPERATION,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "installationNote",
            field: ARTICLE_FIELDS.INSTALLATION_NOTE,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "lockable",
            field: ARTICLE_FIELDS.LOCKABLE,
        },
        {
            type: FILTER_TYPES.CHECKBOX,
            label: "checkValveOption",
            field: ARTICLE_FIELDS.CHECK_VALVE_OPTION,
        },
    ],
    retail: [],
};
