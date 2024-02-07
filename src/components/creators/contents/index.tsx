import { TextMedia } from "./TextMedia";
import { ContactCollection } from "./ContactCollection";
import { getContent } from "@lib/contentful/api/content";
import { SearchParams } from "@type/common";
import { getCurrentLocale } from "@lib/layers/state/server";
import { draftMode } from "next/headers";
import { CardCollection } from "./CardCollection";

const contents = {
  newsCollection: null,
  eventCollection: null,
  blogCollection: null,
  cardCollection: CardCollection,
  contactCollection: ContactCollection,
  tileCollection: null,
  linkList: null,
  textImage: TextMedia,
  accordion: null,
  teaser: null,
  quote: null,
  image: null,
  quoteSlider: null,
  video: null,
  iframe: null,
  energyCampaignForm: null,
  logoSlider: null,
  articleListing: null,
  productFinderFeedingElement: null,
};

export type ContentKey = keyof typeof contents;

export const ContentCreator = async (
  id: string,
  contentKey: ContentKey,
  searchParams: SearchParams,
) => {
  if (!contentKey) {
    return null;
  }

  const Component = contents[contentKey];

  if (!Component) {
    return null;
  }

  const locale = getCurrentLocale();
  const { isEnabled } = draftMode();
  const data = (await getContent(
    id,
    { include: 3, locale },
    { isDraftMode: isEnabled },
  )) as any;

  if (!data) {
    return null;
  }

  return <Component {...data} searchParams={searchParams} />;
};
