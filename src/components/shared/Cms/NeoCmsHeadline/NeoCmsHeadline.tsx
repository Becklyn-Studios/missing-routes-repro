import { NeoHeadline, NeoHeadlineProps } from "@components/shared/NeoHeadline/NeoHeadline";
import React, { PropsWithChildren } from "react";
import "./NeoCmsHeadline.scss";

export const NeoCmsHeadline: React.FC<PropsWithChildren<NeoHeadlineProps>> = ({
    children,
    ...props
}) => (
    <div className="neo-cms-headline">
        <NeoHeadline {...props}>{children}</NeoHeadline>
    </div>
);
