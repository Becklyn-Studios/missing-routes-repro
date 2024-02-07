"use client";

import React, { useState } from "react";
import "./NeoTile.scss";
import { cn } from "@lib/util";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { Image } from "@lib/image";

export interface NeoTileProps {
    image?: {
        src: string;
        alt: string;
    };
    icon?: {
        src: string;
        alt: string;
    };
    teaserLine?: string;
    description?: string;
}

export const NeoTile: React.FC<NeoTileProps> = ({ image, icon, teaserLine, description }) => {
    const [isMobileOverlayActive, setIsMobileOverlayActive] = useState<boolean>(false);
    return (
        <div className={"neo-tile"}>
            <div
                className={cn("tile", {
                    "tile--with-overlay": description,
                    "tile--mobile-overlay-active": isMobileOverlayActive,
                    "tile--with-icon": icon,
                })}
                onClick={() => {
                    if (!isMobileOverlayActive) {
                        setIsMobileOverlayActive(true);
                    }
                }}>
                {image && (
                    <div className="tile__image-wrapper">
                        <Image
                            src={image.src}
                            sizes="(min-width: 1024px) 620px, (min-width: 768px) 560px, 100vw"
                            style={{ objectFit: "contain" }}
                            alt={image.alt ?? ""}
                            fill
                        />
                        <div className="tile__image-gradient" />
                    </div>
                )}
                <div className="tile__content">
                    {icon && (
                        <div className="tile__icon-wrapper">
                            <Image
                                src={icon?.src}
                                sizes="(min-width: 1024px) 620px, (min-width: 768px) 560px, 100vw"
                                alt={icon.alt ?? ""}
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </div>
                    )}
                    <div className="tile__headline">
                        {teaserLine && teaserLine}
                        {teaserLine && description && <NeoIcon icon="chevronRight" />}
                    </div>
                    {description && (
                        <div className="tile__description">
                            {description}
                            <NeoIcon
                                icon="cross"
                                onClick={e => {
                                    e.stopPropagation();
                                    setIsMobileOverlayActive(false);
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
