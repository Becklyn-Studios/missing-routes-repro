import React from "react";
import Link from "next/link";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { getTranslation } from "@lib/layers/translate/server";
import "./NeoToolbar.scss";

export interface NeoToolbarProps {
    text?: string;
    href: string;
    target?: string;
}

export const NeoToolbar: React.FC<NeoToolbarProps> = ({ text, href, target = "_blank" }) => {
    const t = getTranslation();
    return (
        <div className={"neo-toolbar"}>
            <Link href={href} target={target}>
                {text || t.contentful.text.productfinder}
            </Link>
            <NeoIcon icon="productfinder" />
        </div>
    );
};
