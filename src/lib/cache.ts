import { Segment } from "@/type/segment";
import { LocaleKey } from "./locale";
import { getSegmentsForLocale } from "./segments";

export interface SegmentLayer {
  segments: Segment[];
  byId: Record<string, Segment>;
  bySlug: Record<string, Segment>;
  usedLocale: LocaleKey;
}

const cache = new Map<"segment", SegmentLayer>();

export const initializeSegmentLayer = async (locale: LocaleKey) => {
  let current = cache.get("segment");

  if (!current || current.usedLocale !== locale) {
    const segments = await getSegmentsForLocale(locale);

    const byId = segments.reduce(
      (aggr, segment) => {
        const { id } = segment;

        if (!aggr[id]) {
          aggr[id] = segment;
        }
        return aggr;
      },
      {} as Record<string, Segment>,
    );

    const bySlug = segments.reduce(
      (aggr, segment) => {
        const path = segment.slug.join("/");
        if (!aggr[path]) {
          aggr[path] = segment;
        }
        return aggr;
      },
      {} as Record<string, Segment>,
    );

    current = {
      usedLocale: locale,
      segments,
      byId,
      bySlug,
    };

    cache.set("segment", current);
  }

  return current;
};

export const initializeEmptySegmentLayer = () => {
  cache.set("segment", { segments: {} } as SegmentLayer);
};

const getCache = () => {
  const current = cache.get("segment");
  if (!current) {
    throw Error(
      "Accessing segment layer before initialization: Call initializeSegmentLayer() before accessing.",
    );
  } else {
    return current;
  }
};

export const getSegmentLayerUsedLocale = () => {
  return getCache().usedLocale;
};

export const getSegmentByPageId = (pageId: string) => {
  return getCache().byId[pageId];
};

export const getSegmentBySlug = (slug: string | string[]) => {
  return getCache().bySlug[Array.isArray(slug) ? slug.join("/") : slug];
};

export const getSegments = () => {
  return getCache().segments;
};

export const getRootSegment = () => {
  const [root] = getCache().segments.filter(
    ({ properties }) => properties?.isRoot,
  );
  return root;
};

export const getSegmentByOpaccId = (opaccId: string) => {
  return getCache().segments.find(
    (segment) =>
      segment.type === "PRODUCT" &&
      segment.properties.opaccIds &&
      segment.properties.opaccIds.includes(opaccId),
  );
};
