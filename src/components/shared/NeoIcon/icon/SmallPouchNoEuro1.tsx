import React, { SVGProps } from "react";

export const SmallPouchNoEuro1: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 100 100" {...props}>
            <defs>
                <style>
                    {".cls-3{fill:#fff;stroke:#000;stroke-linejoin:round;stroke-width:1.8px}"}
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
                    d="M55.31 33.06c4 14.81 28 18.14 28 31.35S68.41 81.82 50 81.82s-33.32-4.2-33.32-17.41 24.08-16.54 28.08-31.35Z"
                    style={{
                        stroke: "#000",
                        strokeLinejoin: "round",
                        strokeWidth: "1.8px",
                        fill: "none",
                    }}
                />
                <path
                    d="m65 17.17-8.25 14.56A8.14 8.14 0 0 1 50 36.05a7.79 7.79 0 0 1-6.75-4.32L35 17.17Z"
                    className="cls-3"
                />
                <path
                    d="M34.87 16.5c0-3 6.78-5.48 15.13-5.48s15.12 2.45 15.12 5.48S58.35 22 50 22s-15.13-2.47-15.13-5.5Z"
                    className="cls-3"
                />
                <path d="M49 55.7h-.1l-2.47 1.53c-.14.09-.25 0-.25-.12v-2.56a.31.31 0 0 1 .16-.29L49 52.57a.63.63 0 0 1 .41-.13h2.57a.21.21 0 0 1 .23.21v13.62a.21.21 0 0 1-.23.21h-2.8a.21.21 0 0 1-.23-.21Z" />
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
