import React from "react";
import "./NeoCmsQuote.scss";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { NeoButton } from "@components/shared/NeoButton/NeoButton";
import { cn } from "@lib/util";
import { NeoImageProps } from "@components/shared/NeoImage/NeoImage";
import { Image } from "@lib/image";

export type ButtonTarget = "_blank" | "_self";

export interface NeoCmsQuoteProps {
  imageRight?: boolean;
  bigHeadline?: boolean;
  image?: NeoImageProps;
  headline?: string;
  subline?: string;
  quote: string;
  author: string;
  authorDescription: string;
  buttonText?: string;
  buttonLink?: string;
  buttonTarget?: ButtonTarget;
}

export const NeoCmsQuote: React.FC<NeoCmsQuoteProps> = ({
  imageRight,
  bigHeadline,
  image,
  headline,
  subline,
  quote,
  author = "",
  authorDescription = "",
  buttonText,
  buttonLink,
  buttonTarget = "_self",
}) => (
  <div className="neo-cms-quote">
    {(headline || subline) && (
      <div className="neo-cms-quote-above">
        {headline && (
          <NeoHeadline level={bigHeadline ? 2 : 3}>{headline}</NeoHeadline>
        )}
        {subline && <NeoParagraph>{subline}</NeoParagraph>}
      </div>
    )}

    <div className="neo-cms-quote-wrapper">
      <div className="wrapper-internal">
        <div className="wrapper-internal-container">
          <div className={"container-inner"}>
            {image && (
              <div
                className={cn("quote-image-wrapper", {
                  "image-right": imageRight,
                })}
              >
                <Image
                  className="quote-image"
                  sizes="(min-width: 1024px) 620px, (min-width: 768px) 560px, 100vw"
                  src={image.src}
                  alt={image.alt}
                  fill={true}
                />
              </div>
            )}

            <div
              className={cn("container-inner-content", {
                "image-right": imageRight,
                "no-image": !image,
              })}
            >
              <NeoIcon icon="quote" className={cn({ "no-image": !image })} />
              <p className="quote-content-text">{quote}</p>
              <p className="quote-content-author">
                {author},<br />
                {authorDescription}
              </p>
              {buttonText && (
                <NeoButton
                  variation="primary"
                  href={buttonLink}
                  target={buttonTarget}
                >
                  {buttonText}
                </NeoButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
