import React from "react";
import "./NeoLogoSlider.scss";

export interface NeoLogoSliderProps {
    imageUrl: string;
}

export const NeoLogoSlider: React.FC<NeoLogoSliderProps> = ({ imageUrl }) => {
    return (
        <div className="neo-logo-slider">
            <div className={"wrapper"}>
                <div
                    className="sliding-background"
                    style={{ background: `url(${imageUrl}) repeat-x 0 / 100% auto` }}
                />
            </div>
        </div>
    );
};
