"use client";

import React, { PropsWithChildren } from "react";
import "./NeoBackgroundVideo.scss";
import { NeoImage } from "@components/shared/NeoImage/NeoImage";
import { isMobile } from "@lib/client";

export interface NeoBackgroundVideoProps {
    videoSrc?: string;
    imgSrc: string;
    alt?: string;
}

export const NeoBackgroundVideo: React.FC<PropsWithChildren<NeoBackgroundVideoProps>> = ({
    imgSrc,
    videoSrc,
    alt = "",
    children,
}) => {
    return (
        <div className={"neo-background-video"}>
            {isMobile() || !videoSrc ? (
                <NeoImage src={imgSrc} alt={alt} />
            ) : (
                <div className="background__wrapper">
                    <video autoPlay muted loop>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                    {children}
                </div>
            )}
        </div>
    );
};
