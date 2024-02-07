import { ContentfulMediaTypes } from "./ContentfulMediaTypes";

export interface ContentfulMedia {
    title: string;
    description?: string;
    file: {
        url: string;
        details: { size: number; image: { width: number; height: number } };
        fileName: string;
        contentType: ContentfulMediaTypes;
    };
}
