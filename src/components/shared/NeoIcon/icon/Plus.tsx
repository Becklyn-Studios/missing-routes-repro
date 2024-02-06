import React, { SVGProps } from "react";

export const Plus: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 92 92" {...props}>
            <path d="M72.5 46.5c0 2.5-2 4.5-4.5 4.5H50v17c0 2.5-2 4.5-4.5 4.5S41 70.5 41 68V51H24c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h17V24c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v18h18c2.5 0 4.5 2 4.5 4.5z" />
        </svg>
    );
};