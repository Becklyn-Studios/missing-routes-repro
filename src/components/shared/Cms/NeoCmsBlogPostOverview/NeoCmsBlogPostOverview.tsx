import React, { ChangeEventHandler, PropsWithChildren } from "react";
import "./NeoCmsBlogPostOverview.scss";
import { NeoButton } from "@components/shared/NeoButton/NeoButton";
import { cn } from "@lib/util";
import { getTranslation } from "@lib/layers/translate/server";

export interface NeoCmsBlogPostOverviewProps {
    onLoadMoreClick?: ChangeEventHandler;
    loadMoreButton?: boolean;
}

export const NeoCmsBlogPostOverview: React.FC<PropsWithChildren<NeoCmsBlogPostOverviewProps>> = ({
    onLoadMoreClick,
    loadMoreButton = false,
    children,
}) => {
    const t = getTranslation();

    return (
        <div
            className={cn("neo-cms-blog-post-overview", {
                "load-more-button": loadMoreButton,
            })}>
            {children}
            <NeoButton variation="primary" onClick={onLoadMoreClick}>
                {t.contentful.text.loadMore}
            </NeoButton>
        </div>
    );
};
