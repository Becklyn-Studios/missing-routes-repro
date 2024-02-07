import { TextMedia } from "./TextMedia";
import { ContactCollection } from "./ContactCollection";
import { getContent } from "@lib/contentful/api/content";
import { SearchParams } from "@type/common";
import { getCurrentLocale } from "@lib/layers/state/server";
import { draftMode } from "next/headers";
import { CardCollection } from "./CardCollection";
import { Teaser } from "./Teaser";
import { Accordion } from "./Accordion";
import { BlogCollection } from "./BlogCollection";
import { EventCollection } from "./EventCollection";
import { NewsCollection } from "./NewsCollection";
import { TileCollection } from "./TileCollection";
import { LinkList } from "./LinkList";
import { Quote } from "./Quote";
import { Image } from "./Image";
import { QuoteSlider } from "./QuoteSlider";
import { Video } from "./Video";

const contents = {
  newsCollection: NewsCollection,
  eventCollection: EventCollection,
  blogCollection: BlogCollection,
  cardCollection: CardCollection,
  contactCollection: ContactCollection,
  tileCollection: TileCollection,
  linkList: LinkList,
  textImage: TextMedia,
  accordion: Accordion,
  teaser: Teaser,
  quote: Quote,
  image: Image,
  quoteSlider: QuoteSlider,
  video: Video,
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
