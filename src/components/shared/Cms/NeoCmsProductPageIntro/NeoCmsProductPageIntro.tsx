import { NeoImage as NeoImageProps } from "@type/image";
import React from "react";
import { NeoBreadcrumb, NeoBreadcrumbItem } from "@components/shared/NeoBreadcrumb/NeoBreadcrumb";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { NeoButton } from "@components/shared/NeoButton/NeoButton";
import { NeoProductStage } from "@components/shared/NeoProductStage/NeoProductStage";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import "./NeoCmsProductPageIntro.scss";
import {
    ApplicationType,
    NeoApplicationIcon,
} from "@components/shared/NeoApplicationIcon/NeoApplicationIcon";
import { getTranslation } from "@lib/layers/translate/server";

export interface Jumpmark {
    href: string;
    title: string;
    target: string;
}

export interface NeoCmsProductPageIntroProps {
    headline: string;
    leadtext: string;
    breadcrumbs?: NeoBreadcrumbItem[];
    icons: ApplicationType[];
    image?: NeoImageProps;
    jumpMarks: Jumpmark[];
}

export const NeoCmsProductPageIntro: React.FC<NeoCmsProductPageIntroProps> = ({
    headline = "",
    leadtext = "",
    breadcrumbs,
    icons = [],
    image,
    jumpMarks = [],
}) => {
    const t = getTranslation();

    const createJumpmark = (jumpMark: Jumpmark, key: number) => {
        return (
            <NeoButton
                key={key}
                href={jumpMark.href}
                variation="primary"
                target={jumpMark.target}
                disabled={!jumpMark.href}>
                {jumpMark.title}
            </NeoButton>
        );
    };

    return (
        <div className="neo-cms-product-page-intro">
            <div className="pageIntro__stage">
                <NeoProductStage image={image}>
                    <NeoHeadline level={1}>
                        <span dangerouslySetInnerHTML={{ __html: headline }} />
                    </NeoHeadline>
                    <NeoParagraph mobileHidden leadtext>
                        {t.components.NeoCmsProductPageIntro.areaOfApplication}
                    </NeoParagraph>
                    {icons.map((icon, key) => (
                        <NeoApplicationIcon key={key} typeId={icon} />
                    ))}
                    <NeoParagraph leadtext>{t.contentful.text.assortment}</NeoParagraph>
                    {jumpMarks && jumpMarks.map((jumpMark, key) => createJumpmark(jumpMark, key))}
                </NeoProductStage>
            </div>

            <div className="pageIntro__content">
                {breadcrumbs && breadcrumbs.length > 0 && <NeoBreadcrumb items={breadcrumbs} />}
                {leadtext && (
                    <NeoParagraph leadtext capitalize>
                        <span dangerouslySetInnerHTML={{ __html: leadtext }} />
                    </NeoParagraph>
                )}
            </div>
        </div>
    );
};
