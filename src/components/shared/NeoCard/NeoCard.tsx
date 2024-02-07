import React, { PropsWithChildren } from "react";
import { NeoIcon } from "../NeoIcon/NeoIcon";
import "./NeoCard.scss";
import { NeoImage } from "@type/image";
import Link from "next/link";
import { Image } from "@lib/image";

export interface NeoCardProps {
    image?: NeoImage;
    linkUrl?: string;
    linkText?: string;
    linkTarget?: string;
    date?: string;
}

export const NeoCard: React.FC<PropsWithChildren<NeoCardProps>> = ({
    image,
    linkTarget,
    linkText,
    linkUrl,
    date,
    children,
}) => {
    const Component = !linkUrl ? "div" : Link;

    return (
        <Component className="neo-card" href={linkUrl ?? ""} target={linkTarget}>
            {image ? (
                <div className="card__imgWrapper">
                    <Image
                        className="card__img"
                        sizes="(min-width: 1024px) 620px, (min-width: 768px) 560px, 100vw"
                        src={image.src}
                        alt={image.alt ?? ""}
                        fill
                    />
                </div>
            ) : (
                <div className="card__imgWrapper card__imgWrapper--empty">
                    <img className="card__img" src="" alt="" />
                </div>
            )}
            {date && <span className="card__date">{date}</span>}
            <div className="card__content">
                <div className="card__children">{children}</div>
                {linkUrl && (
                    <span className="card__link">
                        {linkText}
                        <NeoIcon icon="arrowThinLeft" />
                    </span>
                )}
            </div>
        </Component>
    );
};
