import React, { PropsWithChildren } from "react";
import "./NeoCmsSlider.scss";
import { cn } from "@lib/util";

export type NeoCmsSliderVariant = "small" | "wide";

export interface NeoCmsSliderProps {
    variant?: NeoCmsSliderVariant;
}

export const NeoCmsSlider: React.FC<PropsWithChildren<NeoCmsSliderProps>> = ({
    variant,
    children,
}) => <div className={cn("neo-cms-slider", variant)}>{children}</div>;
