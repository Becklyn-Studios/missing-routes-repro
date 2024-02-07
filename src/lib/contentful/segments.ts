import { getClient } from "./client";
import { LocaleKey, getI18nFromLocale } from "@lib/i18n/locales";

export type SegmentType =
  | "CONTENT"
  | "PRODUCT"
  | "JOB"
  | "BLOG"
  | "NEWS"
  | "CONTACT"
  | "SEARCH"
  | "PRODUCTFINDER"
  | "REGISTRATION";

const getSegmentTypeByContentType = (
  contentType?: string | null,
): SegmentType | undefined => {
  switch (contentType) {
    case "searchPage":
      return "SEARCH";
    case "contactForm":
      return "CONTACT";
    case "registrationForm":
      return "REGISTRATION";
    case "productfinder":
      return "PRODUCTFINDER";
    case "blogpost":
      return "BLOG";
    case "news":
      return "NEWS";
    case "page":
      return "CONTENT";
    case "productPage":
      return "PRODUCT";
    case "jobPage":
      return "JOB";
  }
};

export interface SegmentDefaultProperties {
  isRoot?: boolean;
}

export interface SegmentContentProperties {
  isHiddenFromNav?: boolean;
  isHiddenFromSearch?: boolean;
}

export interface SegmentProductProperties {
  opaccIds?: string[];
}

export type SegmentProperties = SegmentDefaultProperties &
  (SegmentContentProperties | SegmentProductProperties);

export interface SegmentBase<Type extends SegmentType, Properties = {}> {
  id: string;
  title: string;
  slug: string[];
  children: string[];
  type: Type;
  properties: SegmentDefaultProperties & Properties;
}

export type SegmentDefault = SegmentBase<
  Exclude<SegmentType, "PRODUCT" | "CONTENT">,
  {}
>;
export type SegmentContent = SegmentBase<"CONTENT", SegmentContentProperties>;
export type SegmentProduct = SegmentBase<"PRODUCT", SegmentProductProperties>;

export type Segment = SegmentDefault | SegmentContent | SegmentProduct;

export const getSegmentsForLocale = async (locale: LocaleKey) => {
  const client = getClient();
  const { region, lang } = getI18nFromLocale(locale) ?? {};

  if (!region) {
    throw new Error(`No region found for locale: ${locale}`);
  }

  if (!lang) {
    throw new Error(`No lang found for locale: ${locale}`);
  }

  const homePages = client
    .getEntries({
      content_type: "country",
      limit: 1,
      include: 1,
      locale,
    })
    .then((data) => {
      const [home] = data.items;

      if (!home) {
        throw new Error("No country page found");
      }

      const homePage = home.fields.homePage as any;
      const technicalPages = home.fields.technicalPages as any;

      return {
        roots: {
          region,
          lang,
          id: homePage.sys.id as string,
        },

        technicalPages: technicalPages
          .filter((item: any) => !!item.fields)
          .map((item: any) => ({
            id: item.sys.id,
            slug: [region, lang, item.fields.slug],
            title: item.fields.title,
            children: [],
            type: getSegmentTypeByContentType(item.sys.contentType.sys.id),
            properties: {
              isRoot: false,
            },
          })),
      };
    });

  const contentPages = client
    .getEntries({
      content_type: "page",
      select: [
        "fields.children",
        "fields.title",
        "fields.slug",
        "sys.id",
        "fields.isHidden",
        "fields.excludePageFromNavigation",
      ],
      limit: 1000,
      include: 1,
      locale,
    })
    .then((data) =>
      data.items.map(({ fields, ...rest }) => ({
        fields: { ...fields, type: "CONTENT" },
        ...rest,
      })),
    );

  const productPages = client
    .getEntries({
      content_type: "productPage",
      select: ["fields.slug", "fields.opaccId", "fields.title", "sys.id"],
      limit: 1000,
      include: 1,
      locale,
    })
    .then((data) =>
      data.items.map(({ fields, ...rest }) => ({
        fields: {
          ...fields,
          type: "PRODUCT",
        },
        ...rest,
      })),
    );

  const main = Promise.all([homePages, contentPages, productPages]).then(
    (data) => {
      const [{ roots, technicalPages }, contents, products] = data;

      return [
        ...technicalPages,
        /* @ts-ignore */
        ...normalizeSegments([...contents, ...products], [roots]),
      ];
    },
  );

  const other = Promise.all(
    [
      { type: "NEWS", slug: "news", content_type: "news", locale: "en" },
      { type: "BLOG", slug: "blog", content_type: "blogpost", locale },
      { type: "CONTACT", content_type: "contactForm", locale },
      { type: "SEARCH", content_type: "searchPage", locale },
      { type: "PRODUCTFINDER", content_type: "productfinder", locale },
    ].map(({ type, slug, content_type, locale }) =>
      client
        .getEntries({
          content_type,
          select: ["fields.slug", "fields.title", "sys.id"],
          limit: 1000,
          include: 1,
          locale,
        })
        .then((data) =>
          data.items
            .filter((item) => !!item?.fields?.slug)
            .map((item) => ({
              id: item?.sys?.id,
              slug: [region, lang, slug, item?.fields?.slug]
                .filter((s) => !!s)
                .flatMap((slug) =>
                  encodeURIComponent(slug as string),
                ) as string[],
              title: item?.fields?.title as string,
              type,
              children: [] as string[],
              properties: {
                isRoot: false,
              },
            })),
        ),
    ),
  );

  return Promise.all([main, other]).then((data) => data.flat(2)) as Promise<
    Segment[]
  >;
};

interface RootSegment {
  id: string;
  region: string;
  lang: string;
}

interface RawSegment {
  sys: { id: string };
  fields: {
    slug: string;
    title: string;
    type: SegmentType;
    children?: RawSegment[];
  } & Record<string, any>;
}

export const normalizeSegments = (
  content: RawSegment[],
  roots: RootSegment[],
) => {
  const menu = content
    // Normalize
    .map(
      ({
        sys,
        fields: {
          children,
          slug,
          title,
          type,
          excludePageFromNavigation,
          ...rest
        },
      }) => ({
        slug: [slug],
        id: sys.id,
        title,
        type,
        children: children?.map(({ sys }) => sys.id) ?? [],
        properties: {
          isHiddenFromNav: !!excludePageFromNavigation,
          isRoot: false,
          opaccIds: type === "PRODUCT" ? rest.opaccId?.split(", ") : undefined,
        },
      }),
    )
    // Build look-up table
    .reduce(
      (all, { id, ...rest }) => ({ ...all, [id]: { id, ...rest } }),
      {} as Record<string, Segment>,
    );

  const unpack = (path: string[], current: Segment): Segment[] => {
    if (!current) {
      return [];
    }
    const nextPath = [...path, ...current.slug];
    return [
      { ...current, slug: nextPath },
      ...current.children.flatMap((child) => unpack(nextPath, menu[child])),
    ];
  };

  return roots
    .flatMap(({ region, lang, id }) =>
      unpack([region, lang], { ...menu[id], properties: { isRoot: true } }),
    )
    .map(({ id, slug, title, children, type, properties }) => ({
      id,
      slug: slug.map((slug) => encodeURIComponent(slug)),
      title,
      children,
      type,
      properties,
    }));
};
