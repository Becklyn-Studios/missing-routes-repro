import { getContent } from "@/lib/contentful/api/content";
import { TextMedia } from "./TextMedia";

const contents = {
  newsCollection: null,
  eventCollection: null,
  blogCollection: null,
  cardCollection: null,
  contactCollection: null,
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

export const ContentCreator = async (
  id: string,
  contentId: string,
  locale: string,
) => {
  if (!contentId) {
    return null;
  }

  /* @ts-ignore */
  const Component = contents[contentId];

  if (!Component) {
    return null;
  }

  const data = await getContent(id, locale);

  if (!data) {
    return null;
  }

  return <Component {...data} />;
};
