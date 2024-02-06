import { ContentCreator } from "@/components/creators/contents";
import { NeoHeadline } from "@/components/shared/NeoHeadline/NeoHeadline";
import { initializeSegmentLayer } from "@/lib/cache";
import { getClient } from "@/lib/contentful/client";
import { LangKey, RegionKey, getI18nFromRegionAndLang } from "@/lib/locale";
import { getContentIds } from "@/lib/page";
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
  const { region, lang, slug } = params;

  if (!slug) {
    console.log("Couldn't find slug:", params);
    return notFound();
  }

  const { locale } = getI18nFromRegionAndLang(params);
  const { bySlug } = await initializeSegmentLayer(locale);

  const page =
    bySlug[
      [region, lang, ...slug.map((slug) => decodeURIComponent(slug))].join("/")
    ];

  if (!page) {
    console.log("Could not find pageId", params);
    return notFound();
  }

  const client = getClient();
  const pageProps = await client.getEntry(page.id, { locale });

  if (!pageProps) {
    console.log("Could not find Page or pageProps", {
      ...params,
      pageId: page.id,
    });
    return notFound();
  }

  const title = pageProps.fields.title as string;

  const contentIds = getContentIds(pageProps);

  const contents = contentIds.map(({ id, contentId }) =>
    ContentCreator(id, contentId, locale),
  );

  return (
    <div>
      <h1>{title}</h1>
      {contents}
    </div>
  );
}
