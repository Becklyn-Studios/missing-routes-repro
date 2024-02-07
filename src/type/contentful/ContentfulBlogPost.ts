import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { ContentfulRichText } from "./ContentfulRichText";

export interface ContentfulBlogPost {
  title: string;
  date: string;
  teaserImage: ContentfulMedia;
  teaserDescription: ContentfulRichText;
  author: string;
  readingTime: string;
  tags: string[];
  intro: string;
  slug: string;
  teaserGold: boolean;
}
