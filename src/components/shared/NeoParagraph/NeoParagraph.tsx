import React, { PropsWithChildren } from "react";
import "./NeoParagraph.scss";
import { cn } from "@lib/util";

export interface NeoParagraphProps {
    leadtext?: boolean;
    capitalize?: boolean;
    mobileHidden?: boolean;
    white?: boolean;
    className?: string;
}

export const NeoParagraph: React.FC<PropsWithChildren<NeoParagraphProps>> = ({
    leadtext,
    capitalize,
    mobileHidden,
    white,
    className,
    children,
}) => {
    const classNames = cn(className, {
        "neo-paragraph": true,
        leadtext: leadtext,
        capitalizeFirstLetter: capitalize,
        "mobile-hidden": mobileHidden,
        white: white,
    });

    return typeof children === "string" ? (
        <div className={classNames} dangerouslySetInnerHTML={{ __html: children }}></div>
    ) : (
        <div className={classNames}>{children}</div>
    );
};
