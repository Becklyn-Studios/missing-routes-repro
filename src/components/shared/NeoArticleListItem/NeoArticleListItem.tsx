"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@lib/util";
import "./NeoArticleListItem.scss";
import { IconName, NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { NeoLinkList } from "@components/shared/NeoLinkList/NeoLinkList";
import { Image } from "@lib/image";
import { ArticleListingDownloadLink } from "@components/articlelisting/ArticleListingDownloadLink/ArticleListingDownloadLink";
import { useTranslation } from "@lib/layers/translate/client";

export interface NeoArticleListItemProps {
    imgLeft?: string;
    imgRight?: string;
    title?: string;
    partNo?: string;
    properties: Record<string, any>;
    expandAll?: boolean;
    downloads?: { hasCertificate: boolean; hasDrawing: boolean; hasSpecsheet: boolean };
    expandedProperties?: Record<string, string | number | null>;
    featureIcons?: { icon?: IconName; label?: string }[];
}

export const NeoArticleListItem: React.FC<NeoArticleListItemProps> = ({
    expandAll = false,
    imgLeft,
    imgRight,
    title,
    partNo,
    downloads,
    properties,
    featureIcons,
    expandedProperties,
}) => {
    const t = useTranslation();
    const [isExpanded, setIsExpanded] = useState<boolean>(expandAll);

    useEffect(() => {
        setIsExpanded(expandAll);
    }, [expandAll]);

    const propListing = (isEven: boolean) => {
        return Object.entries(properties).filter((_, index) => {
            if (isEven) {
                return index % 2 === 0;
            }

            return index % 2 !== 0;
        });
    };

    return (
        <div className={cn("neo-article-list-item")}>
            <div className="neo-article-list-item__overview">
                <div className="neo-article-list-item__images">
                    {imgLeft && (
                        <div className={"neo-article-list-item__images__container"}>
                            <Image src={imgLeft} alt={imgLeft} fill={true} />
                        </div>
                    )}
                    {imgRight && (
                        <div className={"neo-article-list-item__images__container"}>
                            <Image src={imgRight} alt={imgRight} fill={true} />
                        </div>
                    )}
                </div>
                <div className="neo-article-list-item__overviewContent">
                    <div className="neo-article-list-item__head">
                        <span className="neo-article-list-item__description">{title}</span>
                        <ul className="neo-article-list-item__list">
                            <li>
                                <span>{t.contentful.text.partNo}: </span> {partNo}
                            </li>
                        </ul>
                    </div>
                    <div className="neo-article-list-item__body">
                        <ul className="neo-article-list-item__list">
                            {propListing(true).map(([key, value]) => (
                                <li key={key}>
                                    {value ? (
                                        <>
                                            <span>{t.contentful.text[key] ?? key}: </span>
                                            {value}
                                        </>
                                    ) : (
                                        t.contentful.text[key] ?? key
                                    )}
                                </li>
                            ))}
                        </ul>
                        <ul className="neo-article-list-item__list">
                            {propListing(false).map(([key, value]) => (
                                <li key={key}>
                                    {value ? (
                                        <>
                                            <span>{t.contentful.text[key] ?? key}: </span>
                                            {value}
                                        </>
                                    ) : (
                                        t.contentful.text[key] ?? key
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div
                    className="neo-article-list-item__more"
                    onClick={() => setIsExpanded(!isExpanded)}>
                    <span>
                        Downloads and properties
                        <NeoIcon icon={isExpanded ? "minus" : "plus"} />
                    </span>
                </div>
            </div>
            <div
                className={cn("neo-article-list-item__details", {
                    "--open": isExpanded,
                })}>
                <div className="neo-article-list-item__detailsWrap">
                    {expandedProperties && (
                        <ul className="neo-article-list-item__list">
                            {Object.entries(expandedProperties).map(([key, value]) => (
                                <li key={key}>
                                    {value ? (
                                        <>
                                            <span>{t.contentful.text[key] ?? key}: </span>
                                            {value}
                                        </>
                                    ) : (
                                        t.contentful.text[key] ?? key
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                    {featureIcons && (
                        <div className="neo-article-list-item__icons">
                            {featureIcons.map(({ icon, label }) => (
                                <div key={icon} className="neo-article-list-item__icons-wrapper">
                                    {icon && <NeoIcon icon={icon} />}
                                    {label && <span>{t.contentful.text[label] ?? label}</span>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {partNo && downloads && (
                    <div className="neo-article-list-item__downloads">
                        <span>{t.contentful.text.tpi}</span>
                        <NeoLinkList>
                            {downloads.hasCertificate && (
                                <ArticleListingDownloadLink
                                    itemNumber={partNo}
                                    documentType="CERTIFICATE"
                                />
                            )}
                            {downloads.hasDrawing && (
                                <ArticleListingDownloadLink
                                    itemNumber={partNo}
                                    documentType="DRAWING"
                                />
                            )}
                            {downloads.hasSpecsheet && (
                                <ArticleListingDownloadLink
                                    itemNumber={partNo}
                                    documentType="SPECSHEET"
                                />
                            )}
                        </NeoLinkList>
                    </div>
                )}
            </div>
        </div>
    );
};
