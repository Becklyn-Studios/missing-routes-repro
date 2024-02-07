import { NeoImage } from "@components/shared/NeoImage/NeoImage";
import React, { PropsWithChildren } from "react";
import "./NeoProductStage.scss";
import { NeoImage as NeoImageType } from "@type/image";

export interface NeoProductStageProps {
    image?: NeoImageType;
}

export const NeoProductStage: React.FC<PropsWithChildren<NeoProductStageProps>> = ({
    image,
    children,
}) => {
    return (
        <div className="neo-product-stage">
            <div className="column1">
                {image && (
                    <div className={"slot"}>
                        <NeoImage src={image.src} alt={image.alt} />
                    </div>
                )}
            </div>
            <div className="column2">
                <div className="slot">{children}</div>
            </div>
        </div>
    );
};
