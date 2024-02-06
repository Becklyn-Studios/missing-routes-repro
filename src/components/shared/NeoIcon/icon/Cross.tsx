import React, { SVGProps } from "react";

export const Cross: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 30 30" {...props}>
            <path d="M28.4 26.6c.6.6.6 1.5 0 2.1-.3.3-.7.4-1 .4s-.8-.1-1-.4L15 17.1 3.9 28.7c-.3.3-.7.4-1 .4s-.8-.1-1-.4c-.6-.6-.6-1.5 0-2.1l11-11.6L1.8 3.8c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0L15 12.9 26.3 1.7c.6-.6 1.5-.6 2.1 0s.6 1.5 0 2.1L17.1 15l11.3 11.6z" />
        </svg>
    );
};
