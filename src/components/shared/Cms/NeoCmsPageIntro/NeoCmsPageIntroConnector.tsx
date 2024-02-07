"use client";

import React, { PropsWithChildren } from "react";

export const NeoCmsPageIntroConnector: React.FC<PropsWithChildren> = ({ children }) => {
    const onExploration = () => {
        const target = document.getElementsByClassName("intro__content").item(0);

        if (!target) {
            return;
        }

        target?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };

    return (
        <div className="intro__connector-clickable" onClick={onExploration}>
            {children}
        </div>
    );
};
