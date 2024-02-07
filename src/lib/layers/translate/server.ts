import { LocaleKey, getI18nFromLocale } from "@lib/i18n/locales";
import { TranslateLayer } from "./types";
import { buildI18nDictionary } from "@lib/i18n/dictionaries";

const cache = new Map<"translate", TranslateLayer>();

export const initializeTranslateLayer = async (props: {
  locale?: LocaleKey;
}) => {
  const { locale } = props;

  if (!locale) {
    throw new Error("No locale found");
  }

  const lang = getI18nFromLocale(locale)?.lang;

  if (!lang) {
    throw new Error(`No lang found for locale: ${locale}`);
  }

  const dictionary = await buildI18nDictionary(lang, locale);
  const current = { dictionary, usedLocale: locale };
  cache.set("translate", current);
  return current;
};

export const initializeEmptyTranslateLayer = () => {
  const current = {
    usedLocale: "de",
    dictionary: { contentful: { text: {}, richText: {} } } as any,
  } as const;
  cache.set("translate", current);
  return current as TranslateLayer;
};

const getCache = () => {
  const current = cache.get("translate");
  if (!current) {
    throw Error(
      "Accessing translation layer before initialization. Call initializeTranslateLayer() before accessing.",
    );
  }

  return current;
};

export const getTranslation = () => {
  return getCache().dictionary;
};
