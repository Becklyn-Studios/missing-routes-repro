import React, { PropsWithChildren } from "react";
import "./NeoCmsImage.scss";
import { cn } from "@lib/util";

export interface NeoCmsImageProps {
    variant?: "small" | "wide";
}

export const NeoCmsImage: React.FC<PropsWithChildren<NeoCmsImageProps>> = ({
    variant,
    children,
}) => <div className={cn("neo-cms-image", variant)}>{children}</div>;
