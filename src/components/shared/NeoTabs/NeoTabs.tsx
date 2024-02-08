"use client";

import React, { PropsWithChildren } from "react";
import "./NeoTabs.scss";
import { cn } from "@lib/util";
import { useSearchParams } from "next/navigation";
import { useSetParams } from "@lib/hook/useSetParams";

interface NeoTab {
    overline?: string;
    headline?: string;
    hash: string;
}

export interface NeoTabsProps {
    tabs: NeoTab[];
    searchParam?: string;
    resetParamsOnChange?: boolean;
}

export const NeoTabs: React.FC<PropsWithChildren<NeoTabsProps>> = ({
    tabs,
    searchParam = "tab",
    resetParamsOnChange,
    children,
}) => {
    const params = useSearchParams();
    const update = useSetParams(resetParamsOnChange);

    if (tabs.length === 0) {
        return null;
    }

    const activeTab = params.get(searchParam) ?? tabs[0]?.hash;
    const setActive = (hash: string) => {
        update(searchParam, hash);
    };

    return (
        <div className="neo-tabs">
            <div className="neo-tab">
                <div className="tabs">
                    <div className="tabs__head">
                        {tabs.map(({ hash, headline, overline }, index) => (
                            <div
                                id={hash}
                                key={index}
                                onClick={() => setActive(hash)}
                                className={cn("tabs__tab tabs__tab", {
                                    "--active": hash === activeTab,
                                })}>
                                <span className="tabs__description">{overline}</span>
                                <span className="tabs__headline">{headline}</span>
                            </div>
                        ))}
                    </div>
                    <div className="tabs__content">{children}</div>
                </div>
            </div>
        </div>
    );
};
