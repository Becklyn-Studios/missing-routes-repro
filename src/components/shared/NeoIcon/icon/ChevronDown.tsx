import React, { SVGProps } from "react";

export const ChevronDown: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 92 92" {...props}>
            <path d="M46 63c-1.1 0-2.1-.4-2.9-1.2l-25-26c-1.5-1.6-1.5-4.1.1-5.7 1.6-1.5 4.1-1.5 5.7.1l22.1 23 22.1-23c1.5-1.6 4.1-1.6 5.7-.1 1.6 1.5 1.6 4.1.1 5.7l-25 26c-.8.8-1.8 1.2-2.9 1.2z" />
        </svg>
    );
};