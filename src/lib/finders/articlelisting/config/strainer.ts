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
            label: "boreDiameter",
            field: ARTICLE_FIELDS.BORE_DIAMETER,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "sealingMaterial",
            field: ARTICLE_FIELDS.SEALING_MATERIAL,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "meshSize",
            field: ARTICLE_FIELDS.MESH_SIZE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "type",
            field: ARTICLE_FIELDS.TYPE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "material",
            field: ARTICLE_FIELDS.MATERIAL,
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
            label: "boreDiameter",
            field: ARTICLE_FIELDS.BORE_DIAMETER,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "sealingMaterial",
            field: ARTICLE_FIELDS.SEALING_MATERIAL,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "meshSize",
            field: ARTICLE_FIELDS.MESH_SIZE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "type",
            field: ARTICLE_FIELDS.TYPE,
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "material",
            field: ARTICLE_FIELDS.MATERIAL,
        },
    ],
};
