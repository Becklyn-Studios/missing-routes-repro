import en from "./dictionaries/en.json";
import de from "./dictionaries/de.json";
import { LangKey, LocaleKey } from "./locales";
import {
  getLocalizedRichTexts,
  getLocalizedTexts,
} from "@lib/contentful/api/localize";
import { Dictionary } from "./util";

export const getCodeI18nDictionary = (lang: LangKey) => {
  switch (lang) {
    case "de":
      return de;
    default:
      return en;
  }
};

const normalizeLocalization = (
  texts: {
    key: string;
    translation: string;
  }[],
) => {
  return texts.reduce(
    (aggr, { key, translation }) => {
      aggr[key] = translation;
      return aggr;
    },
    {} as Record<string, any>,
  );
};

export const getContentfulI18nDictionary = async (locale: LocaleKey) => {
  const [texts, richTexts] = await Promise.all([
    getLocalizedTexts({ locale }),
    getLocalizedRichTexts({ locale }),
  ]);

  return {
    text: normalizeLocalization(texts),
    richText: normalizeLocalization(richTexts),
  };
};

export const buildI18nDictionary = async (lang: LangKey, locale: LocaleKey) => {
  const local = getCodeI18nDictionary(lang);
  const contentful = await getContentfulI18nDictionary(locale);

  return {
    ...local,
    contentful,
  } as Dictionary;
};
