import { ContentfulLink } from "@type/contentful/ContentfulLink";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { ContentfulPageLink } from "@type/contentful/ContentfulPageLink";
import { ContentfulMediaTypes } from "@type/contentful/ContentfulMediaTypes";
import { ImageCondition } from "@type/image";
import { FALLBACK_LANG } from "@lib/i18n/locales";
import { NeoHeadlineLevel } from "@components/shared/NeoHeadline/NeoHeadline";

export const normalizeSizeValues = (sizes: ImageCondition[]) =>
  sizes
    .map((condition) =>
      condition.breakpoint
        ? `(min-width ${condition.breakpoint}) ${condition.maxWidth}`
        : condition.maxWidth,
    )
    .join(", ");

export const normalizeImageUrl = (url: string) =>
  url?.startsWith("//") ? `https:${url}` : url;

export const getFileType = (type?: ContentfulMediaTypes) => {
  if (!type) {
    return undefined;
  }
  const [_, name] = type.split("/");
  return name ?? type;
};

export const normalizeHeadlineLevel = (
  level?: string | number | null,
  fallback: NeoHeadlineLevel | undefined = 2,
): NeoHeadlineLevel | undefined => {
  if (level) {
    if (typeof level === "number") {
      return +`${level}` as NeoHeadlineLevel;
    } else {
      if (level.toLowerCase().startsWith("h")) {
        return +level.slice(1) as NeoHeadlineLevel;
      } else {
        return +level as NeoHeadlineLevel;
      }
    }
  } else {
    return fallback;
  }
};

export const normalizeImage = (
  props?: ContentfulMedia,
  fallback?: { alt?: string; src?: string },
) => {
  if (!props) {
    return undefined;
  }

  const { title: alt, file } = props;
  let src = file?.url;

  if (src) {
    src = normalizeImageUrl(src);
  }

  return {
    src,
    alt,
    ...fallback,
  };
};

export const normalizeVideo = (
  props?: ContentfulMedia,
  fallback?: { src?: string },
) => {
  if (!props) {
    return undefined;
  }

  const { file } = props;
  let src = file?.url;

  if (src) {
    src = normalizeImageUrl(src);
  }

  return {
    src,
    ...fallback,
  };
};

export const normalizePageLink = (
  props?: ContentfulPageLink | ContentfulLink,
) => {
  if (!props) {
    return undefined;
  }

  if ("title" in props && "url" in props) {
    const { title, url } = props;
    return {
      href: url,
      alt: title,
    };
  }

  const { page, title } = props;

  if (!page || !page.slug) {
    return undefined;
  }

  return {
    href: `../${page.slug}`,
    alt: title,
  };
};

export const normalizeDateFormatForLanguage = (
  date: string,
  lang: string = FALLBACK_LANG,
): string =>
  new Date(date).toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
