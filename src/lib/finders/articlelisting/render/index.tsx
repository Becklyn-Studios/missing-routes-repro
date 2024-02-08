import { ARTICLE_FIELDS } from "@lib/finders/shared/articles";
import { MarketKey } from "@lib/finders/shared/sortiments";

import aeratorOem from "./oem/aerator";
import ballJointAndAdapterOem from "./oem/ballJointAndAdapter";
import bypassValveOem from "./oem/bypassValve";
import diverterOem from "./oem/diverter";
import onOffValveOem from "./oem/onOffValve";
import pressureRegulatorOem from "./oem/pressureRegulator";
import rvPatroneOem from "./oem/rvPatrone";
import serviceKeyOem from "./oem/serviceKey";
import strainerOem from "./oem/strainer";
import flowRegulatorOem from "./oem/flowRegulator";

import aeratorRetail from "./retail/aerator";
import ballJointAndAdapterRetail from "./retail/ballJointAndAdapter";
import flowRegulatorRetail from "./retail/flowRegulator";
import serviceKeyRetail from "./retail/serviceKey";
import rvPatroneRetail from "./retail/rvPatrone";
import { IconName } from "@components/shared/NeoIcon/NeoIcon";

type ArticleItem = any;

const getBasicRenderData = (article: ArticleItem): any => ({
    images: article[ARTICLE_FIELDS.IMAGES]?.filter((image: string) => image.indexOf("_L") !== -1)
        .length
        ? article[ARTICLE_FIELDS.IMAGES].filter((image: string) => image.indexOf("_L") !== -1)
        : article[ARTICLE_FIELDS.IMAGES],
    description: article[ARTICLE_FIELDS.DESCRIPTION],
    articleNumber: article[ARTICLE_FIELDS.ARTICLE_NUMBER],
    ean: article[ARTICLE_FIELDS.EAN],
    downloads: [],
    hasCertificate: article[ARTICLE_FIELDS.HAS_CERTIFICATE],
    hasDrawing: article[ARTICLE_FIELDS.HAS_DRAWING],
    hasSpecsheet: article[ARTICLE_FIELDS.HAS_SPECSHEET],
    detailList: [],
});

const renderMap = {
    oem: {
        aerator: aeratorOem,
        flowRegulator: flowRegulatorOem,
        checkValve: rvPatroneOem,
        diverter: diverterOem,
        pressureRegulator: pressureRegulatorOem,
        byPassCartridge: bypassValveOem,
        onOffValve: onOffValveOem,
        mountingTools: serviceKeyOem,
        strainer: strainerOem,
        accessories: ballJointAndAdapterOem,
    },
    retail: {
        aerator: aeratorRetail,
        flowRegulator: flowRegulatorRetail,
        checkValve: rvPatroneRetail,
        diverter: diverterOem,
        pressureRegulator: pressureRegulatorOem,
        byPassCartridge: bypassValveOem,
        onOffValve: onOffValveOem,
        mountingTools: serviceKeyRetail,
        strainer: strainerOem,
        accessories: ballJointAndAdapterRetail,
    },
} as const;

export interface RenderData {
    icons: { icon: IconName }[];
    bodyLists: { label: string; value: string | number }[];
    images: string[];
    description: string;
    articleNumber: string;
    ean: any;
    hasCertificate: boolean;
    hasDrawing: boolean;
    hasSpecsheet: boolean;
    detailList: { label: string; value: string | number }[];
}

export const getRenderData = (article: ArticleItem, market?: MarketKey): RenderData => {
    const { articleType } = article;
    const marketMap = renderMap[market ?? "oem"];
    const target =
        /* @ts-ignore */
        marketMap?.[articleType] ?? renderMap.oem[articleType] ?? renderMap.retail[articleType];
    const base = getBasicRenderData(article);

    if (!!target) {
        return { ...base, ...target(article as any) };
    } else {
        return base;
    }
};
