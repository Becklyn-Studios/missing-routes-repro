import React from "react";
import "./NeoImage.scss";
import { ImageCondition } from "@type/image";
import { normalizeSizeValues } from "@lib/contentful/util";
import { Image } from "@lib/image";

export interface NeoImageProps {
    sizes?: ImageCondition[];
    src: string;
    alt: string;
    copyright?: string;
    caption?: string;
}

export const NeoImage: React.FC<NeoImageProps> = ({
    sizes = [
        {
            breakpoint: "128rem",
            maxWidth: "122rem",
        },
        {
            maxWidth: "100vw",
        },
    ],
    src = "",
    alt = "",
    copyright = "",
    caption = "",
}) => (
    <figure className="neo-image content">
        <Image src={src} sizes={normalizeSizeValues(sizes)} width={620} height={300} alt={alt} />
        <figcaption>{caption}</figcaption>
        <footer>
            <small>{copyright}</small>
        </footer>
    </figure>
);
