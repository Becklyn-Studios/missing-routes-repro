import React, { PropsWithChildren } from "react";
import "./NeoInfoText.scss";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";

export interface NeoInfoTextProps {}

export const NeoInfoText: React.FC<PropsWithChildren<NeoInfoTextProps>> = ({ children }) => {
    return (
        <div className={"neo-info-text"}>
            <NeoIcon icon="information" />
            {children}
        </div>
    );
};
