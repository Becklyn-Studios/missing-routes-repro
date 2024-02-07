"use client";

import { NeoCmsAccordion } from "@components/shared/Cms/NeoCmsAccordion/NeoCmsAccordion";
import { NeoCmsAccordionItem } from "@components/shared/Cms/NeoCmsAccordion/NeoCmsAccordionItem";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { normalizeImage } from "@lib/contentful/util";
import { Rte } from "@lib/rte";
import { ContentfulLink } from "@type/contentful/ContentfulLink";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import { ContentfulRichText } from "@type/contentful/ContentfulRichText";
import React, { useState } from "react";

export interface AccordionItem {
    title: string;
    description?: ContentfulRichText;
    image?: ContentfulMedia;
    imagePosition?: "left" | "right" | "top" | "bottom";
}

export interface AccordionProps {
    headline?: string;
    description?: ContentfulRichText;
    accordionItems: AccordionItem[];
    button?: ContentfulLink;
}

export const Accordion: React.FC<AccordionProps> = ({
    headline,
    description,
    accordionItems,
    button,
}) => {
    const [toggled, setToggled] = useState<string | null>(null);

    const toggleCollapse = (toggle: string) => {
        setToggled(toggle !== toggled ? toggle : null);
    };

    return (
        <NeoCmsAccordion
            headline={headline}
            subline={description}
            button={button && { href: button.url, text: button.title }}>
            {accordionItems.map(({ title, description, image, imagePosition }, key) => {
                const id = `${key}`;
                return (
                    <NeoCmsAccordionItem
                        key={key}
                        id={id}
                        collapsed={toggled === id}
                        toggleCollapsed={toggleCollapse}
                        title={title}
                        imagePosition={imagePosition}
                        image={normalizeImage(image)?.src}>
                        {description && (
                            <NeoParagraph>
                                <Rte content={description} />
                            </NeoParagraph>
                        )}
                    </NeoCmsAccordionItem>
                );
            })}
        </NeoCmsAccordion>
    );
};
