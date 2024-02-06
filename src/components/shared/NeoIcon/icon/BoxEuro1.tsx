import React, { SVGProps } from "react";

export const BoxEuro1: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 100 100" {...props}>
            <defs>
                <style>
                    {".cls-2{fill:none;stroke:#000;stroke-linejoin:round;stroke-width:1.8px}"}
                </style>
            </defs>
            <path
                id="weisser_hg"
                d="M100 50A50 50 0 1 1 50 0a50 50 0 0 1 50 50Z"
                style={{
                    fill: "#fff",
                }}
            />
            <g id="illu">
                <path
                    d="m23.86 37.64 34.74-16.7 17.39 8.54v41.27L41.23 87.44l-17.37-8.52V37.64zM41.23 46.16v41.42M75.99 29.5 41.23 46.19M23.86 37.65l17.37 8.54"
                    className="cls-2"
                />
                <path
                    d="m23.86 37.64 34.74-16.7V7.78v.01L23.86 24.47v-.04 13.34-.13z"
                    className="cls-2"
                />
                <path
                    d="M44.14 19.42c-.36-.81-1-1.09-1.66-.75A4.1 4.1 0 0 0 40.77 21l-2 1a2.56 2.56 0 0 0-1 2.15v.24c0 .92.42 1.45 1 1.18l2-1a1.17 1.17 0 0 0 1.67.73 3.9 3.9 0 0 0 1.65-2.3l2-1a2.57 2.57 0 0 0 1-2.15v-.24c0-.93-.42-1.44-1-1.18Z"
                    className="cls-2"
                />
                <path d="M57.38 56.31 55.05 59c-.13.14-.23.15-.23 0v-2.64A.54.54 0 0 1 55 56l2.41-2.9a1.11 1.11 0 0 1 .38-.31l2.38-1.15c.13-.06.21 0 .21.11v14a.36.36 0 0 1-.21.31l-2.57 1.21c-.13.06-.22 0-.22-.11Z" />
            </g>
            <path
                id="obererRING"
                d="M50 1.8A48.2 48.2 0 1 1 1.8 50 48.25 48.25 0 0 1 50 1.8M50 0a50 50 0 1 0 50 50A50 50 0 0 0 50 0Z"
                style={{
                    fill: "#1d1d1b",
                }}
            />
        </svg>
    );
};
