import React, { SVGProps } from "react";

export const Download: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 92 92" {...props}>
            <path d="M89 58.8V86c0 2.8-2.2 5-5 5H8c-2.8 0-5-2.2-5-5V58.8c0-2.8 2.2-5 5-5s5 2.2 5 5V81h66V58.8c0-2.8 2.2-5 5-5s5 2.2 5 5zM42.4 65c.9 1 2.2 1.5 3.6 1.5s2.6-.5 3.6-1.5l19.9-20.4c1.9-2 1.9-5.1-.1-7.1-2-1.9-5.1-1.9-7.1.1L51 49.3V6c0-2.8-2.2-5-5-5s-5 2.2-5 5v43.3L29.6 37.7c-1.9-2-5.1-2-7.1-.1s-2 5.1-.1 7.1l20 20.3z" />
        </svg>
    );
};