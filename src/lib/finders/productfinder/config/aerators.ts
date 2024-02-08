import { ARTICLE_FIELDS } from "@lib/finders/shared/articles";
import { FILTER_TYPES } from "@lib/finders/shared/types";

export default {
    oem: [
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "streamType",
            field: ARTICLE_FIELDS.STREAM_TYPE,
            options: [],
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "flowRate",
            field: ARTICLE_FIELDS.FLOW_RATE,
            options: [],
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "size",
            field: ARTICLE_FIELDS.SIZE,
            options: [],
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "pressureRange",
            field: ARTICLE_FIELDS.PRESSURE_RANGE,
            options: [],
        },
    ],
    retail: [
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "streamType",
            field: ARTICLE_FIELDS.STREAM_TYPE,
            options: [],
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "flowRate",
            field: ARTICLE_FIELDS.FLOW_RATE,
            options: [],
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "size",
            field: ARTICLE_FIELDS.SIZE,
            options: [],
        },
        {
            type: FILTER_TYPES.DROPDOWN,
            label: "pressureRange",
            field: ARTICLE_FIELDS.PRESSURE_RANGE,
            options: [],
        },
    ],
};
