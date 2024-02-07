import React, { PropsWithChildren } from "react";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { NeoCard, NeoCardProps } from "@components/shared/NeoCard/NeoCard";
import { NeoTag } from "@components/shared/NeoTag/NeoTag";
import { cn } from "@lib/util";
import { getTranslation } from "@lib/layers/translate/server";
import "./NeoBlogPostOverviewTeaser.scss";

export interface NeoBlogPostOverviewTeaserProps extends NeoCardProps {
    author?: string;
    tags?: string[];
    teaserGold?: boolean;
    className?: string;
}

export const NeoBlogPostOverviewTeaser: React.FC<
    PropsWithChildren<NeoBlogPostOverviewTeaserProps>
> = ({
    linkUrl = "",
    linkTarget = "_self",
    date = "",
    author = "",
    tags = [],
    image,
    teaserGold = false,
    className,
    children,
}) => {
    const t = getTranslation();

    return (
        <div
            className={cn("neo-blog-post-overview-teaser", className, {
                "teaser-gold": teaserGold,
            })}>
            <NeoCard
                image={image}
                linkUrl={linkUrl}
                linkTarget={linkTarget}
                linkText={t.contentful.text.more}>
                {tags && (
                    <div className="card-tags">
                        {tags.map((tag, key) => (
                            <NeoTag key={key}>{t.contentful.text[tag]}</NeoTag>
                        ))}
                    </div>
                )}

                <div className="card-information">
                    {date && (
                        <span className="card-date">
                            <NeoIcon icon="stopwatch" />
                            {date}
                        </span>
                    )}

                    {author && (
                        <span className="card-author">
                            <NeoIcon icon="user" />
                            {author}
                        </span>
                    )}
                </div>

                {children}
            </NeoCard>
        </div>
    );
};
