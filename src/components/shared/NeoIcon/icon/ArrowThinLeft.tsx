import React, { SVGProps } from "react";

export const ArrowThinLeft: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 92 92" {...props}>
            <path d="M84 46c0 2.2-1.8 4-4 4H21.6l18.1 18.2c1.6 1.6 1.6 4.1 0 5.7-.7.7-1.7 1.1-2.8 1.1-1 0-2.1-.4-2.8-1.2l-24.9-25c-1.6-1.6-1.6-4.1 0-5.6l24.9-25c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L21.6 42H80c2.2 0 4 1.8 4 4z" />
        </svg>
    );
};