import { LangKey } from "@lib/i18n/locales";
import { getMaingroupNameForOpaccId } from "../shared/groups";
import { ARTICLE_FIELDS } from "../shared/articles";
import { createArticleFieldMap } from "../shared/fields";

export const getProductGroupNameForArticle = (article: any) => {
    try {
        return getMaingroupNameForOpaccId(article.maingroup_id);
    } catch {
        return undefined;
    }
};

const getFieldOf = (article: any, lang: LangKey) => {
    const getOneFieldOfArticle = getOneFieldOf(article);
    const ids = createArticleFieldMap(lang);
    return (fieldName: string) => {
        /* @ts-ignore */
        const fieldDefinition = ids[fieldName];
        if (Array.isArray(fieldDefinition)) {
            return getOneFieldOfArticle(fieldDefinition);
        }
        return article[fieldDefinition];
    };
};

const getOneFieldOf = (article: any) => {
    return (fieldNames: string[]) => {
        const existing = fieldNames.find(field => article[field]);
        if (existing) {
            return article[existing];
        }
    };
};

const toBoolean = (booleanString: string) => booleanString === "1";

const booleanFields = [
    ARTICLE_FIELDS.HAS_AC,
    ARTICLE_FIELDS.HAS_SLC,
    ARTICLE_FIELDS.HAS_SSR,
    ARTICLE_FIELDS.HAS_CERTIFICATE,
    ARTICLE_FIELDS.HAS_DRAWING,
    ARTICLE_FIELDS.HAS_SPECSHEET,
    ARTICLE_FIELDS.CHECK_VALVE_OPTION,
    ARTICLE_FIELDS.LOCKABLE,
    ARTICLE_FIELDS.IS_VANDAL_PROOF,
    ARTICLE_FIELDS.HAS_FLOW_REGULATION,
];

export const normalizeArticle = (article: any, lang: LangKey, fallbackLang: LangKey): any => {
    if (!article) {
        return {} as any;
    }

    const getField = getFieldOf(article, lang);
    const getFieldFallback = getFieldOf(article, fallbackLang);

    const defaultArticleFields: any = Object.keys(ARTICLE_FIELDS).reduce(
        (aggr, currKey) => ({
            ...aggr,
            /* @ts-ignore */
            [ARTICLE_FIELDS[currKey]]:
                /* @ts-ignore */
                booleanFields.indexOf(ARTICLE_FIELDS[currKey]) !== -1
                    ? /* @ts-ignore */
                      toBoolean(
                          /* @ts-ignore */
                          getField(ARTICLE_FIELDS[currKey]) ??
                              /* @ts-ignore */
                              getFieldFallback(ARTICLE_FIELDS[currKey])
                      )
                    : /* @ts-ignore */
                      getField(ARTICLE_FIELDS[currKey]) ??
                      /* @ts-ignore */
                      getFieldFallback(ARTICLE_FIELDS[currKey]),
        }),
        {}
    );

    return {
        ...defaultArticleFields,
        articleType: getProductGroupNameForArticle(article),
    };
};
