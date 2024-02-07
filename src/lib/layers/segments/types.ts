import { Segment } from "@lib/contentful/segments";
import { LocaleKey } from "@lib/i18n/locales";

export interface SegmentLayer {
  segments: Segment[];
  byId: Record<string, Segment>;
  bySlug: Record<string, Segment>;
  usedLocale: LocaleKey;
}
