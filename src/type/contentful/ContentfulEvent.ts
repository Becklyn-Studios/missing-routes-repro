import { ContentfulRichText } from "./ContentfulRichText";
import { ContentfulLink } from "@type/contentful/ContentfulLink";

export interface ContentfulEvent {
    title: string;
    startDate: string;
    endDate: string;
    teaserDescription: ContentfulRichText;
    eventPageLink: ContentfulLink;
}
