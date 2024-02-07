"use client";

import React, { useEffect, useRef } from "react";
import "./NeoIframe.scss";

export interface NeoIframeProps {
    src: string;
}

export const NeoIframe: React.FC<NeoIframeProps> = ({ src }) => {
    const ref = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const eventName = event.data[0];
            const height = event.data[1];

            if (eventName === "setIframeHeight" && ref.current) {
                ref.current.style.height = height / 10 + "rem";
            }
        };

        window.addEventListener("message", handleMessage, false);

        return () => {
            window.removeEventListener("message", handleMessage, false);
        };
    }, []);

    return <iframe ref={ref} className={"neo-iframe"} src={src}></iframe>;
};
