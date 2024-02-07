import {
  LangKey,
  RegionKey,
  getI18nFromRegionAndLang,
} from "@lib/i18n/locales";

import { StateLayer } from "./types";

const cache = new Map<"state", StateLayer>();

export const initializeStateLayer = (props: {
  region: RegionKey;
  lang: LangKey;
  pageId?: string;
  slug?: string[];
}) => {
  let current = cache.get("state");
  const { region, lang, pageId, slug } = props;

  if (
    !current ||
    current.currentRegion !== region ||
    current.currentLang !== lang
  ) {
    const {
      locale: currentLocale,
      region: currentRegion,
      lang: currentLang,
    } = getI18nFromRegionAndLang(props);
    current = {
      currentLocale,
      currentRegion,
      currentLang,
      currentPageId: pageId,
    };
    cache.set("state", current);
  }

  if (slug && current.currentSlug !== slug) {
    current = {
      ...current,
      currentSlug: slug.map((slug) => decodeURIComponent(slug)),
    };
    cache.set("state", current);
  }

  return current;
};

const getCache = () => {
  const current = cache.get("state");
  if (!current) {
    throw Error(
      "Accessing state layer before initialization. Call initializeStateLayer() before accessing.",
    );
  }

  return current;
};

export const getCurrentLocale = () => {
  return getCache().currentLocale;
};

export const getCurrentRegion = () => {
  return getCache().currentRegion;
};

export const getCurrentLang = () => {
  return getCache().currentLang;
};

export const getCurrentPageId = () => {
  const currentPageId = getCache().currentPageId;

  if (!currentPageId) {
    throw new Error(
      "No currentPageId found. This function should only be called inside of the app.",
    );
  }

  return currentPageId;
};

export const getCurrentSlug = () => {
  const currentSlug = getCache().currentSlug;

  if (!currentSlug) {
    throw new Error(
      "No currentSlug found. This function should only be called inside of the app.",
    );
  }

  return currentSlug;
};

export const setCurrentPageId = (currentPageId: string) => {
  const current = { ...getCache(), currentPageId };
  cache.set("state", current);
  return current;
};

export const setCurrentSlug = (currentSlug: string[]) => {
  const current = { ...getCache(), currentSlug };
  cache.set("state", current);
  return current;
};
