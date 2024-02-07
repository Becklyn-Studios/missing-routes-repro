import React, { PropsWithChildren } from "react";
import "./NeoCmsAccordion.scss";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { NeoButton } from "@components/shared/NeoButton/NeoButton";
import { ContentfulRichText } from "@type/contentful/ContentfulRichText";
import { Rte } from "@lib/rte";

export interface NeoCmsAccordionProps extends PropsWithChildren {
    headline?: string;
    subline?: ContentfulRichText | string;
    button?: {
        text: string;
        href: string;
    };
}

export const NeoCmsAccordion: React.FC<NeoCmsAccordionProps> = ({
    headline,
    subline,
    button,
    children,
}) => {
    return (
        <div className="neo-cms-accordion">
            <div className="accordion">
                {headline && <NeoHeadline level={2}>{headline}</NeoHeadline>}
                {subline && (
                    <NeoParagraph className="accordion__description">
                        {typeof subline !== "string" ? <Rte content={subline} /> : subline}
                    </NeoParagraph>
                )}
                {children}
                {button && (
                    <div className="accordion__button-link">
                        <NeoButton href={button.href}>{button.text}</NeoButton>
                    </div>
                )}
            </div>
        </div>
    );
};
