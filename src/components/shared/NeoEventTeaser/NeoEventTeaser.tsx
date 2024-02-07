import React, { PropsWithChildren } from "react";
import { NeoCardProps } from "../NeoCard/NeoCard";
import { NeoIcon } from "../NeoIcon/NeoIcon";
import "./NeoEventTeaser.scss";
import Link from "next/link";

export interface NeoEventTeaserProps extends NeoCardProps {
    date?: string;
}

export const NeoEventTeaser: React.FC<PropsWithChildren<NeoEventTeaserProps>> = ({
    date,
    linkTarget,
    linkText,
    linkUrl,
    children,
}) => (
    <Link className="neo-event-teaser" href={linkUrl ?? ""} target={linkTarget}>
        <span className="event-teaser__date">
            <NeoIcon icon="calendar" /> {date}
        </span>
        <div className="event-teaser__content">
            <div className="neo-event-teaser-children">{children}</div>
            {linkUrl && (
                <span className="event-teaser__link">
                    {linkText} <NeoIcon icon="arrowThinLeft" />
                </span>
            )}
        </div>
    </Link>
);
