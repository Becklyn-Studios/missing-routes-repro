import { cn } from "@lib/util";
import React, { PropsWithChildren } from "react";
import { NeoIcon } from "../NeoIcon/NeoIcon";
import "./NeoTeaser.scss";
import { NeoImage } from "@type/image";
import Link from "next/link";
import { normalizeImageUrl } from "@lib/contentful/util";
import { Image } from "@lib/image";

export interface NeoTeaserProps {
    image?: NeoImage;
    linkUrl?: string;
    linkText?: string;
    linkTarget?: string;
    variant?: NeoTeaserVariant;
}

export type NeoTeaserVariant = "image-right";

export const NeoTeaser: React.FC<PropsWithChildren<NeoTeaserProps>> = ({
    image,
    linkTarget,
    linkText,
    linkUrl,
    variant,
    children,
}) => (
    <div
        className={cn(variant, {
            "neo-teaser": true,
        })}>
        <Link className="teaser" href={linkUrl ?? ""} target={linkTarget}>
            {image && (
                <div className={"teaser__imgWrapper"}>
                    <Image
                        className="teaser__img"
                        src={normalizeImageUrl(image.src)}
                        alt={image.alt}
                        fill={true}
                        sizes="(min-width: 1024px) 620px, (min-width: 768px) 560px, 100vw"
                    />
                </div>
            )}
            <div className="teaser__content">
                {children}
                <span className="teaser__link">
                    {linkText} <NeoIcon icon="arrowThinLeft" />
                </span>
            </div>
        </Link>
    </div>
);
