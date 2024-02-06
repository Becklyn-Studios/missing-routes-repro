import React, { SVGProps } from "react";

export const Bulk: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 100 100" {...props}>
            <defs>
                <style>
                    {
                        ".cls-3{fill:#fff}.cls-2{fill:none}.cls-2,.cls-3{stroke:#000;stroke-linejoin:round;stroke-width:1.8px}"
                    }
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
                    d="m17.85 44.13 26.88-12.94 33.2 15.88v21.19L51.03 81.2 17.85 65.33v-21.2zM51.03 59.99V81.3M77.93 47.08l-26.9 12.94M17.85 44.14l33.18 15.88"
                    className="cls-2"
                />
                <path
                    d="M34.45 19.43 7.59 32.38l10.26 11.76 26.88-12.95-10.28-11.76zM85.63 34.01 52.45 18.15l-7.72 13.04 33.2 15.88 7.7-13.06z"
                    className="cls-2"
                />
                <path
                    d="M95.1 47.94 68.24 60.9l-17.21-.88 26.9-12.95 17.17.87zM51.03 60 17.85 44.14l-7.71 13.04 33.19 15.88L51.03 60z"
                    className="cls-3"
                />
                <path
                    d="M44.75 31.19v21.3M40.06 54.75l4.69-2.26M44.75 52.49l11 5.26"
                    className="cls-2"
                />
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
