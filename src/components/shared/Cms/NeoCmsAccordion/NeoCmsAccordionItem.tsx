"use client";

import React, { PropsWithChildren, useRef } from "react";
import { cn } from "@lib/util";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { Image } from "@lib/image";

export interface NeoCmsAccordionItem extends PropsWithChildren {
    title: string;
    image?: string;
    imagePosition?: "left" | "right" | "top" | "bottom" | string;
    id: string;
    collapsed: boolean;
    toggleCollapsed: (id: string) => void;
}

export const NeoCmsAccordionItem: React.FC<NeoCmsAccordionItem> = ({
    id,
    toggleCollapsed,
    collapsed,
    title,
    image,
    imagePosition,
    children,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={ref}
            className="accordion__item"
            onClick={() => {
                toggleCollapsed(id);

                if (!collapsed) {
                    window.setTimeout(() => {
                        ref.current?.scrollIntoView({
                            inline: "start",
                            behavior: "smooth",
                        });
                    }, 500);
                }
            }}>
            <div
                className={cn("accordion__title", {
                    "is-collapsed": collapsed,
                })}>
                <button className="accordion__button">
                    <span className="accordion__text">{title}</span>
                    <NeoIcon className="accordion__icon" icon="chevronDown" />
                </button>
            </div>
            <div
                className={cn("accordion__item-description", {
                    "is-collapsed": !collapsed,
                })}>
                <div
                    className={cn("accordion__image", {
                        left: "left" === imagePosition,
                        right: "right" === imagePosition,
                        top: "top" === imagePosition,
                        bottom: "bottom" === imagePosition,
                    })}>
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            width={100}
                            height={100}
                            sizes="100px"
                            className="teaser__img"
                        />
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};
