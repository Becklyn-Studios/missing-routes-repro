import { NeoDownloadLink } from "@components/shared/NeoDownloadLink/NeoDownloadLink";
import React from "react";
import {
  NeoCmsTextMedia,
  NeoCmsTextMediaOrder,
} from "@components/shared/Cms/NeoCmsTextMedia/NeoCmsTextMedia";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { NeoImage } from "@components/shared/NeoImage/NeoImage";
import { Rte } from "@lib/rte";
import { normalizeHeadlineLevel, normalizeImage } from "@lib/contentful/util";
import { ContentfulRichText } from "@type/contentful/ContentfulRichText";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { NeoVideo } from "@components/shared/NeoVideo/NeoVideo";
import { NeoLinkList } from "@components/shared/NeoLinkList/NeoLinkList";
import { NeoLink } from "@components/shared/NeoLink/NeoLink";

type TextMediaImagePositionType = "" | "Top" | "Left" | "Bottom" | "Right";

export interface TextMediaProps {
  headline?: string;
  headlineLevel?: string;
  headlineType?: string;
  content?: ContentfulRichText;
  image?: ContentfulMedia;
  youtubeId?: string;
  imagePosition?: TextMediaImagePositionType;
  caption: string;
  copyright: string;
  links: {
    links: {
      title: string;
      url: string;
    }[];
    downloads: {
      title: string;
      file: {
        url: string;
        details: { size: number };
        fileName: string;
        contentType: string;
      };
    }[];
  };
  greyBackground: boolean;
}

export const TextMedia: React.FC<TextMediaProps> = ({
  headline,
  headlineLevel,
  headlineType,
  content,
  image,
  youtubeId,
  caption,
  copyright,
  links,
  imagePosition,
  greyBackground,
}) => {
  const normalizedImage = image && normalizeImage(image);
  const getMediaPosition = (
    imagePosition?: TextMediaImagePositionType,
  ): NeoCmsTextMediaOrder => {
    const positionMap: Record<
      TextMediaImagePositionType,
      NeoCmsTextMediaOrder
    > = {
      "": "mediaLeft",
      Top: "mediaTop",
      Bottom: "mediaBottom",
      Left: "mediaLeft",
      Right: "mediaRight",
    };

    return positionMap[imagePosition ?? ""] || "mediaLeft";
  };

  const order =
    image || youtubeId ? getMediaPosition(imagePosition) : "mediaTop";
  const noMedia = !image && !youtubeId;

  return (
    <NeoCmsTextMedia
      hasBackground={greyBackground}
      noMedia={noMedia}
      order={order}
    >
      {normalizedImage && (
        <div className={"media"}>
          <NeoImage {...normalizedImage} caption={caption} />{" "}
        </div>
      )}
      {youtubeId && (
        <div className={"media"}>
          <NeoVideo
            youtubeId={youtubeId}
            caption={caption}
            copyright={copyright}
          />
        </div>
      )}
      <div className={"content"}>
        {headline && (
          <NeoHeadline
            level={normalizeHeadlineLevel(headlineLevel || headlineType)}
          >
            {headline}
          </NeoHeadline>
        )}
        {content && <Rte content={content} />}
        {links?.links && (
          <NeoLinkList>
            {links.links.map((link, key) => (
              <NeoLink key={key} href={link.url}>
                {link.title}
              </NeoLink>
            ))}
          </NeoLinkList>
        )}
        {links?.downloads && (
          <NeoLinkList>
            {links.downloads.map((link, key) => (
              <NeoDownloadLink
                key={key}
                href={link.file.url}
                fileSize={link.file.details.size}
                fileType={link.file.contentType}
                fileName={link.title}
              >
                {link.title}
              </NeoDownloadLink>
            ))}
          </NeoLinkList>
        )}
      </div>
    </NeoCmsTextMedia>
  );
};
