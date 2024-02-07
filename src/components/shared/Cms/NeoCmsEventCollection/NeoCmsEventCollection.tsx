import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { NeoLink } from "@components/shared/NeoLink/NeoLink";
import { cn } from "@lib/util";
import { NeoLink as NeoLinkProps } from "@type/link";
import React, { PropsWithChildren } from "react";
import "./NeoCmsEventCollection.scss";

export interface NeoCmsEventCollectionProps {
    headline: string;
    headlineLevel?: number;
    link?: NeoLinkProps;
}

export const NeoCmsEventCollection: React.FC<PropsWithChildren<NeoCmsEventCollectionProps>> = ({
    headline,
    headlineLevel = 3,
    children,
    link,
}) => (
    <div
        className={cn("neo-cms-event-collection", {
            [`count-${React.Children.count(children)}`]: children,
            "count-more": React.Children.count(children) > 2,
        })}>
        {headline && <NeoHeadline level={headlineLevel as 1}>{headline}</NeoHeadline>}
        {children}
        {link && (
            <div className="neo-link-wrapper">
                <NeoLink href={link.url} target={link.target ?? "_self"}>
                    {link.title}
                </NeoLink>
            </div>
        )}
    </div>
);
