import { LocaleKey } from "@lib/i18n/locales";
import { Dictionary } from "@lib/i18n/util";

export interface TranslateLayer {
  dictionary: Dictionary;
  usedLocale: LocaleKey;
}
