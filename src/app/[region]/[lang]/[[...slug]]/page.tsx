import { ContentCreator } from "@components/creators/contents";
import { PageCreator, PageId } from "@components/creators/pages";
import { getPageById } from "@lib/contentful/api/page";
import { normalizer } from "@lib/contentful/normalizer";
import {
  LangKey,
  RegionKey,
  getI18nFromRegionAndLang,
} from "@lib/i18n/locales";
import { LayersProviders, initializeLayers } from "@lib/layers";
import { initializeSegmentLayer } from "@lib/layers/segments/server";
import { getCurrentLocale, getCurrentPageId } from "@lib/layers/state/server";
import { getContentKeys, getPageKey } from "@lib/page";
import { draftMode } from "next/headers";
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

export default async function ({ params }: PageProps) {
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

  const { isEnabled } = draftMode();

  const locale = getCurrentLocale();
  const page = await getPageById(
    pageId,
    { locale },
    { isDraftMode: isEnabled },
  );

  if (!page) {
    console.log("Could not find page", { ...params, pageId });
    return notFound();
  }

  const pageKey = getPageKey(page);
  const contentIds = getContentKeys(page);

  if (!pageKey) {
    console.log("Could not find pageKey", { ...params, pageId });
    return notFound();
  }

  const contents = contentIds.map(({ id, contentId }: any) =>
    ContentCreator(id, contentId, {}),
  );
  const Page = PageCreator(pageKey as PageId);
  const pageProps = normalizer(page.fields);

  if (!Page || !pageProps) {
    console.log("Could not find Page or pageProps", { ...params, pageId });
    return notFound();
  }

  return (
    <div>
      <LayersProviders {...props}>
        <Page {...pageProps}>{contents}</Page>
      </LayersProviders>
    </div>
  );
}
