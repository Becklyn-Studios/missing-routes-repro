import { FALLBACK_LANG, LangKey } from "@lib/i18n/locales";
import { ARTICLE_FIELDS } from "./articles";
import { getMaingroupFeatureKeyForKey } from "./groups";

export type ArticleFieldMap = ReturnType<typeof createArticleFieldMap>;
export type ArticleFieldMapKey = keyof ArticleFieldMap;
export type ArticleFieldMapValue = ArticleFieldMap[keyof ArticleFieldMap];

export const createArticleFieldMap = (language: string) => {
    const addLanguage = (text: string) => `${text}_${language}`;
    const addValue = (text: string) => `${text}_value`;
    return {
        [ARTICLE_FIELDS.ARTICLE_NUMBER]: "number",
        [ARTICLE_FIELDS.STRUCTURE_TYPE]: "type",
        [ARTICLE_FIELDS.BORE_DIAMETER]: [
            "B11,HG0300",
            "B11,HG0200",
            "B11,HG0201",
            "B11,HG0700",
            "B11,HG1003",
        ]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.CHECK_VALVE_OPTION]: addLanguage(transformFieldName("A29,HG0800")),
        [ARTICLE_FIELDS.CONNECTION_THREAD]: addLanguage(transformFieldName("B28,HG0301")),
        [ARTICLE_FIELDS.DATASHEET_URL]: "",
        [ARTICLE_FIELDS.DESCRIPTION]: addLanguage("description"),
        [ARTICLE_FIELDS.PRODUCTLINE_NAME]: addLanguage("name"),
        [ARTICLE_FIELDS.DESIGN]: ["B30,HG0200", "B30,HG0301"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.DIFFERENTIAL_PRESSURE]: "",
        [ARTICLE_FIELDS.DOWNSTREAM_THREAD]: ["B29,HG1002"].map(transformFieldName).map(addLanguage),
        [ARTICLE_FIELDS.FILTER_MATERIAL]: addLanguage(transformFieldName("B29,HG1003")),
        [ARTICLE_FIELDS.FILTER_TYPE]: addLanguage(transformFieldName("E2,HG1003")),
        [ARTICLE_FIELDS.FLOW_ADJUSTMENT]: addLanguage(transformFieldName("B30,HG0700")),
        [ARTICLE_FIELDS.FLOW_RATE]: ["F1,HG0100", "F1,HG0200", "F1,HG0300", "F1,HG0700"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.FUNCTION]: addLanguage(transformFieldName("B29,HG0300")),
        [ARTICLE_FIELDS.HAS_CERTIFICATE]: "has_certificate",
        [ARTICLE_FIELDS.HAS_DRAWING]: "has_drawing",
        [ARTICLE_FIELDS.HAS_SPECSHEET]: "has_specsheet",
        [ARTICLE_FIELDS.IMAGES]: "images",
        [ARTICLE_FIELDS.INFLOW]: addLanguage(transformFieldName("B29,HG0700")),
        [ARTICLE_FIELDS.INSTALLATION_NOTE]: addLanguage(transformFieldName("A28,HG0800")),
        [ARTICLE_FIELDS.LOCKABLE]: addLanguage(transformFieldName("A30,HG0800")),
        [ARTICLE_FIELDS.MATERIAL]: ["B30,HG0800", "B30,HG1001", "B29,HG1003"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.MAX_FLOW_RATE]: addLanguage(transformFieldName("F30,HG0700")),
        [ARTICLE_FIELDS.MAX_TEMPERATURE]: ["F3,HG0300", "F3,HG0200", "F3,HG0301", "F3,HG0700"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.MESH_SIZE]: addLanguage(transformFieldName("F30,HG1003")),
        [ARTICLE_FIELDS.OPERATING_PRESSURE]: ["F4,HG0301", "F4,HG0700"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.OPERATION]: addLanguage(transformFieldName("B29,HG0800")),
        [ARTICLE_FIELDS.OUTLET_PRESSURE]: ["A30,HG0200", "A30,HG0301"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.PDM_BRANCH]: ["B12,HG1002"].map(transformFieldName).map(addLanguage),
        [ARTICLE_FIELDS.PRESSURE_RANGE]: ["F29,HG0300", "A25,HG0100"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.PRESSURE_LOSS]: ["F30,HG0201"].map(transformFieldName).map(addLanguage),
        [ARTICLE_FIELDS.PUSH_BUTTON_CONNECTION]: addLanguage(transformFieldName("B28,HG0700")),
        [ARTICLE_FIELDS.SEALING_MATERIAL]: addLanguage(transformFieldName("B30,HG1003")),
        [ARTICLE_FIELDS.HAS_AC]: addLanguage(transformFieldName("A28,HG0100")),
        [ARTICLE_FIELDS.HAS_SLC]: addLanguage(transformFieldName("A30,HG0100")),
        [ARTICLE_FIELDS.HAS_SSR]: addLanguage(transformFieldName("A29,HG0100")),
        [ARTICLE_FIELDS.SIZE]: ["B30,HG0100", "E30,HG1001"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.STREAM_TYPE]: addLanguage(transformFieldName("B28,HG0100")),
        [ARTICLE_FIELDS.SURFACE]: ["B28,HG1002"].map(transformFieldName).map(addLanguage),
        [ARTICLE_FIELDS.TEMPERATURE_RANGE]: ["F3,HG0300", "F3,HG0200", "F3,HG0301", "F3,HG0700"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.TYPE]: ["B29,HG1001", "A30,HG1003"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.UPSTREAM_THREAD]: addLanguage(transformFieldName("B30,HG1002")),
        [ARTICLE_FIELDS.MAINGROUP_ID]: "maingroup_id",
        [ARTICLE_FIELDS.PRODUCT_FAMILY_ID]: "product_family_id",
        [ARTICLE_FIELDS.OPACC_ID]: "opacc_id",
        [ARTICLE_FIELDS.LAYOUT_VARIANT]: "layout_variant",
        [ARTICLE_FIELDS.SORTIMENTS]: [
            "E1,HG0100",
            "E1,HG0300",
            "E1,HG0200",
            "E1,HG0800",
            "E1,HG0301",
            "E1,HG0201",
            "E1,HG0700",
            "E1,HG1001",
            "E1,HG1002",
            "E1,HG1003",
        ]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.SORTIMENTS_VALUE]: [
            "E1,HG0100",
            "E1,HG0300",
            "E1,HG0200",
            "E1,HG0800",
            "E1,HG0301",
            "E1,HG0201",
            "E1,HG0700",
            "E1,HG1001",
            "E1,HG1002",
            "E1,HG1003",
        ]
            .map(transformFieldName)
            .map(addValue),
        [ARTICLE_FIELDS.PACKAGING]: ["B27,HG0100", "B27,HG0300", "B27,HG1001", "B27,HG1002"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.PACKAGING_VALUE]: ["B27,HG0100", "B27,HG0300", "B27,HG1001", "B27,HG1002"]
            .map(transformFieldName)
            .map(addValue),
        [ARTICLE_FIELDS.AREA_OF_APPLICATION]: [
            "E3,HG0100",
            "E3,HG0300",
            "E3,HG0200",
            "E3,HG0301",
            "E3,HG0201",
            "E3,HG0700",
            "E3,HG1001",
            "E3,HG1002",
            "E3,HG1003",
        ]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.IS_VANDAL_PROOF]: addLanguage(transformFieldName("A27,HG0100")),
        [ARTICLE_FIELDS.HAS_FLOW_REGULATION]: ["A1,HG0100", "A1,HG0200"]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.WITH_WITHOUT_HOUSING]: addLanguage(transformFieldName("A26,HG0100")),
        [ARTICLE_FIELDS.SUBGROUP]: [
            "E2,HG0100",
            "E2,HG0300",
            "E2,HG0200",
            "E2,HG0301",
            "E2,HG0201",
            "E2,HG1002",
        ]
            .map(transformFieldName)
            .map(addLanguage),
        [ARTICLE_FIELDS.EAN]: "art_ean",
    };
};

export const transformFieldName = (name: string): string => {
    if (name !== undefined) {
        return `free_${name.split(",")[0].toLowerCase()}_${getMaingroupFeatureKeyForKey(
            name.split(",")[1]
        )}`;
    } else {
        return "";
    }
};

export const getArticleFieldLookup = (lang: LangKey, fallbackLang: LangKey = FALLBACK_LANG) => {
    const defaultMap = createArticleFieldMap(lang);
    const fallbackMap = createArticleFieldMap(fallbackLang);
    return (key: ArticleFieldMapKey) => [defaultMap[key], fallbackMap[key]];
};
