import React from "react";
import "./NeoBlogInfoBox.scss";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { NeoSocialMediaList } from "@components/shared/NeoSocialMediaList/NeoSocialMediaList";
import { getTranslation } from "@lib/layers/translate/server";

export interface NeoBlogInfoBoxProps {
    author: string;
    readingTime: string;
    facebookUrl?: string;
    twitterUrl?: string;
    linkedinUrl?: string;
    xingUrl?: string;
}

export const NeoBlogInfoBox: React.FC<NeoBlogInfoBoxProps> = ({
    author,
    readingTime,
    facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=",
    twitterUrl = "https://twitter.com/intent/tweet?text=",
    linkedinUrl = "https://www.linkedin.com/shareArticle?mini=true&url=",
    xingUrl = "https://www.xing.com/app/user?op=share;url=",
}) => {
    const t = getTranslation();

    return (
        <div className={"neo-blog-info-box"}>
            <div className="neo-blog-info-box-detail">
                <div className="detail-user">
                    <NeoIcon icon="user" />
                    <span className={"detail-user-author"}>{author}</span>
                </div>
                <div className="detail-reading-time">
                    <NeoIcon icon="stopwatch" />
                    <span>{readingTime}</span>
                </div>
            </div>
            <div className="share">
                <span className={"share-label"}>{t.contentful.text.share}:</span>
                <NeoSocialMediaList
                    facebook={facebookUrl}
                    twitter={twitterUrl}
                    linkedin={linkedinUrl}
                    xing={xingUrl}
                />
            </div>
        </div>
    );
};
