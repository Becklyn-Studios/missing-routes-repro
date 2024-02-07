import React from "react";
import { NeoCmsLinkList } from "@components/shared/Cms/NeoCmsLinkList/NeoCmsLinkList";
import { NeoDownloadLink } from "@components/shared/NeoDownloadLink/NeoDownloadLink";
import { NeoLink } from "@components/shared/NeoLink/NeoLink";
import { NeoLinkList } from "@components/shared/NeoLinkList/NeoLinkList";
import { getFileType } from "@lib/contentful/util";
import { ContentfulLink } from "@type/contentful/ContentfulLink";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";

export interface LinkListProps {
    downloads: ContentfulMedia[];
    links: ContentfulLink[];
}

export const LinkList: React.FC<LinkListProps> = ({ downloads = [], links = [] }) => (
    <NeoCmsLinkList>
        <NeoLinkList>
            {links.map((link, key) => (
                <NeoLink key={key} href={link.url}>
                    {link.title}
                </NeoLink>
            ))}
            {downloads.map(
                ({ file, title }, key) =>
                    file && (
                        <NeoDownloadLink
                            key={key}
                            href={file.url}
                            fileSize={file.details?.size}
                            fileType={getFileType(file.contentType)}
                            fileName={title}>
                            {title}
                        </NeoDownloadLink>
                    )
            )}
        </NeoLinkList>
    </NeoCmsLinkList>
);
