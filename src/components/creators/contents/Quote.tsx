import { ButtonTarget, NeoCmsQuote } from "@components/shared/Cms/NeoCmsQuote/NeoCmsQuote";
import { normalizeImage } from "@lib/contentful/util";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import React from "react";
import { NeoLink } from "@type/link";

export interface QuoteProps {
    headline: string;
    subline: string;
    quote: string;
    author: string;
    authorDescription: string;
    image: ContentfulMedia;
    imageAlignment: ("Yes" | "No")[];
    button?: NeoLink;
}

export const Quote: React.FC<QuoteProps> = ({
    headline,
    subline,
    quote,
    author,
    authorDescription,
    image,
    imageAlignment,
    button,
}) => {
    return (
        <NeoCmsQuote
            author={author}
            authorDescription={authorDescription}
            headline={headline}
            subline={subline}
            quote={quote}
            image={normalizeImage(image)}
            imageRight={imageAlignment?.includes("Yes")}
            buttonText={button?.title}
            buttonLink={button?.url}
            buttonTarget={button?.target as ButtonTarget}
        />
    );
};
