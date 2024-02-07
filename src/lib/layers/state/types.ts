import { LangKey, LocaleKey, RegionKey } from "@lib/i18n/locales";

export interface StateLayer {
  currentSlug?: string[];
  currentPageId?: string;
  currentLocale: LocaleKey;
  currentLang: LangKey;
  currentRegion: RegionKey;
}
