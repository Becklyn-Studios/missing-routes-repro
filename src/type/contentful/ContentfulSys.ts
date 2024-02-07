export interface ContentfulSysBase {
    linkType: "ContentType" | "Space";
    type: "Link";
    id: string;
}

export interface ContentfulSysEntry {
    linkType: "ContentType";
    type: "Link" | "Entry";
    id: string;
    createdAt: string;
    updatedAt: string;
    environment: { sys: ContentfulSysBase };
    revision: number;
    contentType: { sys: ContentfulSysBase };
    locale: string;
}

export type ContentfulSys = ContentfulSysEntry | ContentfulSysBase;
