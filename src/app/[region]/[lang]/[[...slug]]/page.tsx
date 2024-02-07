import { ContentCreator } from "@components/creators/contents";
import { getClient } from "@lib/contentful/client";
import {
  LangKey,
  RegionKey,
  getI18nFromRegionAndLang,
} from "@lib/i18n/locales";
import { LayersProviders, initializeLayers } from "@lib/layers";
import { initializeSegmentLayer } from "@lib/layers/segments/server";
import { getCurrentLocale, getCurrentPageId } from "@lib/layers/state/server";
import { getContentIds } from "@lib/page";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    region: RegionKey;
    lang: LangKey;
    slug: string[];
  };
}

export async function generateStaticParams({ params }: PageProps) {
  const { region, lang, locale } = getI18nFromRegionAndLang(params);

  if (!region || !lang || !locale) {
    return notFound();
  }

  const { segments } = await initializeSegmentLayer(locale);

  return segments.map(({ slug: path }) => {
    const [region, lang, ...slug] = path;
    return { region, lang, slug };
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  if (!slug) {
    console.log("Couldn't find slug:", params);
    return notFound();
  }

  const props = await initializeLayers(params);
  const pageId = getCurrentPageId();

  if (!pageId) {
    console.log("Could not find pageId", params);
    return notFound();
  }

  const client = getClient();
  const locale = getCurrentLocale();
  const pageProps = await client.getEntry(pageId, { locale });

  if (!pageProps) {
    console.log("Could not find Page or pageProps", {
      ...params,
      pageId,
    });
    return notFound();
  }

  const title = pageProps.fields.title as string;

  const contentIds = getContentIds(pageProps);

  const contents = contentIds.map(({ id, contentId }) =>
    /* @ts-ignore */
    ContentCreator(id, contentId, locale),
  );

  return (
    <div>
      <LayersProviders {...props}>
        <h1>{title}</h1>
        {contents}
      </LayersProviders>
    </div>
  );
}
