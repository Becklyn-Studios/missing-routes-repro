"use client";

import React, { PropsWithChildren, useState } from "react";
import "./NeoCmsQuoteSlider.scss";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";

export interface NeoCmsQuoteSliderProps {}

export const NeoCmsQuoteSlider: React.FC<PropsWithChildren<NeoCmsQuoteSliderProps>> = ({
    children,
}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = React.Children.toArray(children);

    return (
        <div className="neo-cms-quote-slider">
            <div className="slider">
                {slides.map((child, index) => (
                    <div key={index} style={{ display: slideIndex === index ? "block" : "none" }}>
                        {child}
                    </div>
                ))}
            </div>
            <div className="controls">
                <div className="controls-inner">
                    <div className="controls-items">
                        <NeoIcon
                            icon="chevronRight"
                            className="rotate"
                            onClick={() =>
                                setSlideIndex(() => {
                                    if (slideIndex - 1 < 1) {
                                        return slides.length - 1;
                                    }
                                    return slideIndex - 1;
                                })
                            }
                        />
                        <span className="slide-number">
                            {slideIndex + 1}/{slides.length}
                        </span>
                        <NeoIcon
                            icon="chevronRight"
                            onClick={() =>
                                setSlideIndex(() => {
                                    if (slideIndex + 1 >= slides.length) {
                                        return 0;
                                    }
                                    return slideIndex + 1;
                                })
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
