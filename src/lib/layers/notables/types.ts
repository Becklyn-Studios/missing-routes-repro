import { LocaleKey } from "@lib/i18n/locales";

export interface NotablesLayer {
  urls: {
    homeUrl: string;
    productFinderUrl: string;
    blogUrl: string;
    newsUrl: string;
    contactUrl: string;
    searchUrl: string;
    registerUrl: string;
    newPasswordUrl: string;
  };
  usedLocale: LocaleKey;
}
