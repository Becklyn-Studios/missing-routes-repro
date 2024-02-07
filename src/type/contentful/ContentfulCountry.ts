import { ContentfulLink } from "@type/contentful/ContentfulLink";
import { ContentfulPage } from "@type/contentful/ContentfulPage";

export interface ContentfulCountry {
    name: string;
    code: string;
    footerLinksColumn1?: ContentfulLink[];
    footerLinksColumn2?: ContentfulLink[];
    footerLinksColumn3?: ContentfulLink[];
    footerLinksBottom?: ContentfulLink[];
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    instagram?: string;
    wechat?: string;
    companyname: string;
    technicalPages?: ContentfulPage[];
    languages: string[];
    registerLink: string;
    newPasswordLink: string;
    blog?: ContentfulLink;
    mediapage?: ContentfulLink;
    [key: string]: any;
}
