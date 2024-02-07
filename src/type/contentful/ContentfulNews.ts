import { ContentfulMedia } from "./ContentfulMedia";
import { ContentfulRichText } from "./ContentfulRichText";

export interface ContentfulNews {
    title: string;
    date: string;
    teaserImage: ContentfulMedia;
    teaserDescription: ContentfulRichText;
    countries: string[];
    intro: string;
    contents: ContentfulRichText;
    slug: string;
}
