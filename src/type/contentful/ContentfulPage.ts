import { ContentfulMedia } from "./ContentfulMedia";
import { ContentfulContent } from "./ContentfulContent";

export interface ContentfulPage {
    title: string;
    stageHeadline: string;
    stageImage: ContentfulMedia;
    stageVideo: ContentfulMedia;
    slug: string;
    isPage: boolean;
    intro: string;
    contents: ContentfulContent;
    children: ContentfulPage;
    hideBreadcrumb: boolean;
    facebookPixel: string;
}
