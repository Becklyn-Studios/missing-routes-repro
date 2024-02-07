import { getSegmentByPageId } from "@lib/layers/segments/server";
import { ContentfulSys } from "@type/contentful/ContentfulSys";
import safeJsonStringify from "safe-json-stringify";

export type NormalizeProps = Record<string, any> & {
  sys: ContentfulSys;
};

export interface NormalizeOptions {
  withLinkResolving?: boolean;
}

const normalize = (content: NormalizeProps, options: NormalizeOptions = {}) => {
  const { sys, ...fields } = content;
  const { withLinkResolving = true } = options;

  // Handle edge-case for pageLink, productPage and page
  if (withLinkResolving && sys && sys.type === "Entry") {
    const { contentType } = sys;

    if (contentType.sys && contentType.sys.linkType === "ContentType") {
      const id =
        contentType.sys.id === "pageLink"
          ? fields?.page?.sys?.id
          : // TODO: Add other page types
            contentType.sys.id === "page" ||
              contentType.sys.id === "productPage" ||
              contentType.sys.id === "productfinder" ||
              contentType.sys.id === "newslettersubscribePage" ||
              contentType.sys.id === "newsletterUnsubscribePage"
            ? sys?.id
            : null;

      if (id) {
        const segment = getSegmentByPageId(id);
        const path = segment.slug.join("/");

        return {
          sys,
          title: fields.title ?? fields.page.title,
          url: path ? "/" + path : "#",
        };
      } else {
        if ("url" in fields && "title" in fields) {
          return {
            title: fields.title,
            url: fields.url,
          };
        }
      }
    }
  }

  return content;
};

const unwrap = (content: any, options?: NormalizeOptions): any => {
  if (typeof content !== "object") {
    return content;
  }

  if (Array.isArray(content)) {
    return content.map((value) => unwrap(value, options));
  }

  if (content.fields) {
    return unwrap(
      normalize({ ...content.fields, sys: content.sys }, options),
      options,
    );
  } else {
    return Object.entries(content).reduce(
      (aggr, [key, value]) => {
        aggr[key] = unwrap(value, options);
        return aggr;
      },
      {} as Record<string, any>,
    );
  }
};

export const normalizer = (content: any, options?: NormalizeOptions) => {
  try {
    return unwrap(JSON.parse(safeJsonStringify(content)), options);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
