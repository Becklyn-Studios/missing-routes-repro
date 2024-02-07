import React from "react";
import { NeoCmsQuoteSlider } from "@components/shared/Cms/NeoCmsQuoteSlider/NeoCmsQuoteSlider";
import { Quote, QuoteProps } from "./Quote";

export interface QuoteSliderProps {
    quotes?: QuoteProps[];
}

export const QuoteSlider: React.FC<QuoteSliderProps> = ({ quotes = [] }) => (
    <NeoCmsQuoteSlider>
        {quotes.map((quote, key) => (
            <Quote key={key} {...quote} />
        ))}
    </NeoCmsQuoteSlider>
);
