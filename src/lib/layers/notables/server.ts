import { NotablesLayer } from "./types";
import {
  getSegmentLayerUsedLocale,
  getSegments,
} from "@lib/layers/segments/server";
import { Segment, SegmentType } from "@lib/contentful/segments";

const cache = new Map<"notables", NotablesLayer>();

export const initializeNotablesLayer = () => {
  let current = cache.get("notables");
  const localeUsedBySegments = getSegmentLayerUsedLocale();
  const segments = getSegments();

  if (!current || current.usedLocale !== localeUsedBySegments) {
    current = {
      usedLocale: localeUsedBySegments,
      urls: {
        homeUrl: getHomeUrl(segments),
        productFinderUrl: getUrlBySegmentType("PRODUCTFINDER", segments),
        blogUrl: getUrlBySegmentType("BLOG", segments),
        contactUrl: getUrlBySegmentType("CONTACT", segments),
        searchUrl: getUrlBySegmentType("SEARCH", segments),
        newsUrl: getUrlBySegmentType("NEWS", segments),
        registerUrl: "https://oemlogin.neoperl.com/en/website-register.htm",
        newPasswordUrl: "https://oemlogin.neoperl.com/en/passwordforgotten.htm",
      },
    };
    cache.set("notables", current);
  }
  return current;
};

const getHomeUrl = (segments: Segment[]) => {
  const [home] = segments
    .filter(
      (segment) => segment.properties.isRoot && segment.slug.includes("home"),
    )
    .sort();
  return home?.slug?.join("/");
};

const getUrlBySegmentType = (segmentType: SegmentType, segments: Segment[]) => {
  const [segment] = segments
    .filter((segment) => segment.type === segmentType)
    .sort();
  return segment?.slug.join("/");
};

const getCache = () => {
  const current = cache.get("notables");
  if (!current) {
    throw Error(
      "Accessing notables layer before initialization. Call initializeNotablesLayer() before accessing.",
    );
  }

  return current;
};

export const getNotableUrls = () => {
  return getCache().urls;
};
