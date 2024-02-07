import React from "react";
import "./NeoContact.scss";
import { NeoHeadline } from "../NeoHeadline/NeoHeadline";
import { NeoLink } from "../NeoLink/NeoLink";
import { NeoSocialMediaList } from "../NeoSocialMediaList/NeoSocialMediaList";
import { cn } from "@lib/util";
import { Image } from "@lib/image";

export interface NeoContactProps {
    image?: {
        src: string;
        alt: string;
    };
    headline?: string;
    subline?: string;
    phone?: string;
    fax?: string;
    mail?: string;
    linkedin?: string;
    xing?: string;
    single?: boolean;
}

export const NeoContact: React.FC<NeoContactProps> = ({
    image,
    headline,
    subline,
    phone,
    fax,
    mail,
    linkedin,
    xing,
    single,
}) => {
    return (
        <div
            className={cn({
                "neo-contact": true,
                contact: true,
                single: single,
            })}>
            {image && (
                <Image
                    className="contact__image"
                    src={image.src}
                    alt={image.alt}
                    height={170}
                    width={170}
                    sizes="170px"
                />
            )}
            <div className="contact__details">
                {headline && <NeoHeadline level={3}>{headline}</NeoHeadline>}
                {subline && <p className="contact__jobtitle">{subline}</p>}
                <ul className="contact__list">
                    {phone && (
                        <li>
                            <NeoLink hideMarker noUppercase href={`tel:${phone}`}>
                                <span>t:</span>
                                {phone}
                            </NeoLink>
                        </li>
                    )}
                    {fax && (
                        <li>
                            <span>f:</span>
                            {fax}
                        </li>
                    )}
                    {mail && (
                        <li>
                            <NeoLink hideMarker noUppercase href={`mailto:${mail}`}>
                                {mail}
                            </NeoLink>
                        </li>
                    )}
                </ul>
                {(linkedin || xing) && (
                    <NeoSocialMediaList isRed={true} linkedin={linkedin} xing={xing} />
                )}
            </div>
        </div>
    );
};
