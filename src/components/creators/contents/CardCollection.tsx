import { NeoCmsCardCollection } from "@components/shared/Cms/NeoCmsCardCollection/NeoCmsCardCollection";
import { NeoCard } from "@components/shared/NeoCard/NeoCard";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import {
  normalizeHeadlineLevel,
  normalizeImage,
  normalizePageLink,
} from "@lib/contentful/util";
import { Rte } from "@lib/rte";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { ContentfulPageLink } from "@type/contentful/ContentfulPageLink";
import { ContentfulRichText } from "@type/contentful/ContentfulRichText";
import React from "react";

export interface CardCollectionProps {
  headline: string;
  headlineLevel?: string;
  cards: {
    headline: string;
    headlineLevel?: string;
    image?: ContentfulMedia;
    text?: ContentfulRichText;
    link?: ContentfulPageLink;
  }[];
  greyBackground?: boolean;
}

export const CardCollection: React.FC<CardCollectionProps> = ({
  headline,
  headlineLevel,
  cards,
  greyBackground,
}) => (
  <NeoCmsCardCollection
    headline={headline}
    headlineLevel={normalizeHeadlineLevel(headlineLevel)}
    background={greyBackground}
  >
    {cards.map(({ headline, headlineLevel, image, link, text }, key) => {
      const normalizedLink = link && normalizePageLink(link);
      return (
        <NeoCard
          key={key}
          image={image && normalizeImage(image, { alt: headline })}
          linkUrl={normalizedLink?.href}
          linkText={normalizedLink?.alt}
        >
          {headline && (
            <NeoHeadline level={normalizeHeadlineLevel(headlineLevel, 4)}>
              {headline}
            </NeoHeadline>
          )}
          {text && <Rte content={text} />}
        </NeoCard>
      );
    })}
  </NeoCmsCardCollection>
);
