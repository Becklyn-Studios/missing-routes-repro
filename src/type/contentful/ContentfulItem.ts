import { ContentfulEntryLink } from "./ContentfulEntryLink";

export interface ContentfulItem<T> {
    metadata: { tags: string[] };
    sys: {
        space: ContentfulEntryLink;
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: ContentfulEntryLink;
        revision: number;
        contentType: ContentfulEntryLink;
        locale: string;
    };
    fields: T;
}
