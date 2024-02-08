import { FALLBACK_LANG, LangKey } from "@lib/i18n/locales";
import { MarketKey } from "../shared/sortiments";
import { normalizeArticle } from "./fields";
import { getRenderData } from "./render";

export const getArticleData = (article: any, lang: LangKey, market?: MarketKey) => {
    const normalized = normalizeArticle(article, lang, FALLBACK_LANG);
    const data = getRenderData(normalized, market);

    const { hasCertificate, hasDrawing, hasSpecsheet } = data;

    const {
        description: title,
        articleNumber: partNo,
        images = [],
        bodyLists,
        detailList,
        icons,
    } = data;

    const [left, right] = images;

    const properties = bodyLists
        .flatMap((item: any) => item)
        .reduce(
            (aggr: any, { value, label }: any) => {
                if (!value && !label) {
                    return aggr;
                }

                if (!value) {
                    aggr[label] = null;
                    return aggr;
                }

                if (!label) {
                    aggr[value] = null;
                    return aggr;
                }

                aggr[label] = value;
                return aggr;
            },
            {} as Record<string, string | null | undefined>
        );

    const expandedProperties = detailList.reduce(
        (aggr, { label, value }) => {
            aggr[label] = value;
            return aggr;
        },
        {} as Record<string, string | number>
    );

    return {
        imgLeft: left,
        imgRight: right,
        title: title,
        partNo: partNo,
        properties: properties,
        featureIcons: icons,
        expandedProperties,
        downloads: { hasCertificate, hasDrawing, hasSpecsheet },
    };
};
