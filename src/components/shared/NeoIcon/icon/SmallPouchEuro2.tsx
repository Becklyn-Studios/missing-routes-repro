import React, { SVGProps } from "react";

export const SmallPouchEuro2: React.FC<SVGProps<SVGSVGElement>> = props => {
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
                <path d="M30.01 39.08v-12.3L66.39 9.33l.06 12.12-36.44 17.63z" className="cls-2" />
                <path
                    d="M46 27.1a1.67 1.67 0 0 0 2.21.32 5.22 5.22 0 0 0 2.27-2.48l2.69-1.3a2.67 2.67 0 0 0 1.38-2.15v-.2c0-.85-.54-1.22-1.28-.88l-2.68 1.3a1.67 1.67 0 0 0-2.19-.32 5.15 5.15 0 0 0-2.29 2.48l-2.69 1.3a2.66 2.66 0 0 0-1.37 2.14v.22c0 .83.54 1.22 1.28.86Z"
                    className="cls-2"
                />
                <path d="M48.75 60.09a.57.57 0 0 1 .1-.33l4.87-8.13a4.53 4.53 0 0 0 .82-2.31c0-.92-.56-1.32-1.51-.86a2.87 2.87 0 0 0-1.63 2.41.3.3 0 0 1-.23.27l-2.24.72c-.12 0-.18 0-.16-.17A7.44 7.44 0 0 1 53.13 46c2.65-1.27 4.26-.34 4.26 1.9a7.74 7.74 0 0 1-1.41 4L52.33 58l4.86-2.34c.12-.06.2 0 .2.11v2a.35.35 0 0 1-.2.3l-8.24 4c-.12.06-.2 0-.2-.11Z" />
                <path d="M30 39.16s-17.9 39.35 0 45.9 0-45.9 0-45.9Z" className="cls-2" />
                <path
                    d="M36.27 83.93c22-19.41 34.18-18.34 35.34-19.2 11.17-8.28-5.16-43.28-5.16-43.28"
                    style={{
                        strokeLinecap: "round",
                        fill: "none",
                        stroke: "#000",
                        strokeLinejoin: "round",
                        strokeWidth: "1.8px",
                    }}
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
