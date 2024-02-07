import { NeoBackgroundVideo } from "@components/shared/NeoBackgroundVideo/NeoBackgroundVideo";
import { normalizeDateFormatForLanguage } from "@lib/contentful/util";
import { NeoImage as NeoImageProps } from "@type/image";
import { NeoLink } from "@type/link";
import React from "react";
import { NeoCmsHeadline } from "../NeoCmsHeadline/NeoCmsHeadline";
import { NeoBreadcrumb, NeoBreadcrumbItem } from "@components/shared/NeoBreadcrumb/NeoBreadcrumb";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { NeoButton } from "@components/shared/NeoButton/NeoButton";
import "./NeoCmsPageIntro.scss";
import { NeoCmsTags } from "../NeoCmsTags/NeoCmsTags";
import { NeoTag } from "@components/shared/NeoTag/NeoTag";
import { NeoCmsPageIntroConnector } from "./NeoCmsPageIntroConnector";
import { Image } from "@lib/image";
import { getTranslation } from "@lib/layers/translate/server";

export interface NeoCmsPageIntroProps {
    headline: string;
    subline?: string;
    leadtext: string;
    breadcrumbs?: NeoBreadcrumbItem[];
    image?: NeoImageProps;
    video?: string;
    featuredLinks?: NeoLink[];
    date?: string;
    tags?: string[];
}

export const NeoCmsPageIntro: React.FC<NeoCmsPageIntroProps> = ({
    headline,
    subline,
    leadtext,
    breadcrumbs,
    image,
    video,
    date,
    tags,
    featuredLinks,
}) => {
    const t = getTranslation();
    return (
        <div className="neo-cms-page-intro">
            {image && (
                <div className="intro__stage">
                    {video ? (
                        <div className="intro__video-wrapper">
                            <NeoBackgroundVideo
                                videoSrc={video}
                                imgSrc={image?.src}
                                alt={image.alt}
                            />
                        </div>
                    ) : (
                        <div className="intro__img-wrapper">
                            <Image
                                className="intro__img"
                                src={image.src}
                                alt={image.alt}
                                sizes="100vw"
                                fill={true}
                            />
                        </div>
                    )}
                    <div className="intro__content">
                        {date && (
                            <div className="intro__date">
                                <time>{normalizeDateFormatForLanguage(date)}</time>
                            </div>
                        )}
                        {headline && (
                            <NeoCmsHeadline level={1}>
                                <div dangerouslySetInnerHTML={{ __html: headline }} />
                            </NeoCmsHeadline>
                        )}
                        {subline && (
                            <NeoCmsHeadline level={2}>
                                <div dangerouslySetInnerHTML={{ __html: subline }} />
                            </NeoCmsHeadline>
                        )}
                        {tags && (
                            <NeoCmsTags>
                                {tags.map((tag, key) => {
                                    const tagTitle = t.contentful.text[tag] ?? tag;

                                    return <NeoTag key={key}>{tagTitle}</NeoTag>;
                                })}
                            </NeoCmsTags>
                        )}
                    </div>
                    <div className="intro__connector">
                        <NeoCmsPageIntroConnector>
                            {t.contentful.text.connector}
                        </NeoCmsPageIntroConnector>
                    </div>
                </div>
            )}
            <div className="intro__content">
                {breadcrumbs && <NeoBreadcrumb items={breadcrumbs} />}
                {!image && (
                    <>
                        {date && (
                            <div className="intro__date">
                                <time>{normalizeDateFormatForLanguage(date)}</time>
                            </div>
                        )}
                        {headline && (
                            <NeoCmsHeadline level={1}>
                                <div dangerouslySetInnerHTML={{ __html: headline }} />
                            </NeoCmsHeadline>
                        )}
                        {subline && (
                            <NeoCmsHeadline level={2}>
                                <div dangerouslySetInnerHTML={{ __html: subline }} />
                            </NeoCmsHeadline>
                        )}
                    </>
                )}
                {leadtext && (
                    <NeoParagraph leadtext capitalize>
                        <div
                            className="intro__dangerous"
                            dangerouslySetInnerHTML={{ __html: leadtext }}
                        />
                    </NeoParagraph>
                )}
                <div className="intro__links">
                    <div className="intro__links-overflow">
                        {featuredLinks &&
                            featuredLinks.map((link, key) => (
                                <NeoButton href={link.url} target={link.target} key={key}>
                                    {link.title}
                                </NeoButton>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
