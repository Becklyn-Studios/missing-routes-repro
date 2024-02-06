import React, { SVGProps } from "react";

export const Calendar: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 92 92" {...props}>
            <path d="M22 21.8V9c0-2.8 2.2-5 5-5s5 2.2 5 5v12.8c0 2.8-2.2 5-5 5s-5-2.2-5-5zm43 5c2.8 0 5-2.2 5-5V9c0-2.8-2.2-5-5-5s-5 2.2-5 5v12.8c0 2.8 2.2 5 5 5zm27-11.4V83c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V15.4C0 13.2 1.8 11 4 11h9.3c2.2 0 4 1.8 4 4s-1.8 4-4 4H8v17h76V19h-5.3c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c2.2 0 4 2.2 4 4.4zM84 79V43H8v36h76zM39.7 19h12.6c2.2 0 4-1.8 4-4s-1.8-4-4-4H39.7c-2.2 0-4 1.8-4 4s1.8 4 4 4z" />
        </svg>
    );
};