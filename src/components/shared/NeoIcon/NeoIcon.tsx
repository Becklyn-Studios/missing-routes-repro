import { cn } from "@lib/util";
import React, { HTMLAttributes } from "react";
import "./NeoIcon.scss";
import { getIcon, IconKey } from "./icon/index";

export type IconName = IconKey;

interface NeoIconProps extends HTMLAttributes<HTMLDivElement> {
    icon: IconName;
    className?: string;
    // These props make styling component easier than creating new classes
    rotate?: number;
    width?: number;
    height?: number;
}

export const NeoIcon: React.FC<NeoIconProps> = ({
    icon,
    className,
    rotate,
    color,
    width,
    height,
    ...rest
}) => {
    const SvgIcon = getIcon(icon);

    if (!SvgIcon) {
        return null;
    }

    return (
        <div
            className={cn("neo-icon", className)}
            aria-label={icon}
            role="img"
            style={{
                transform: rotate ? `rotate(${rotate}deg)` : undefined,
                width: width ?? undefined,
                height: height ?? undefined,
            }}
            {...rest}>
            <SvgIcon />
        </div>
    );
};
