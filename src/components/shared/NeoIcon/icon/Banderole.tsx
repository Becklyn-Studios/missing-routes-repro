import React, { SVGProps } from "react";

export const Banderole: React.FC<SVGProps<SVGSVGElement>> = props => {
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
                <path d="M48.56 47.65 46 49.18c-.14.09-.26 0-.26-.12v-2.57a.35.35 0 0 1 .16-.29l2.62-1.69a.68.68 0 0 1 .42-.13h2.57a.21.21 0 0 1 .23.21v13.65a.21.21 0 0 1-.23.21h-2.72a.21.21 0 0 1-.23-.21Z" />
                <path
                    d="M92.44 37.29v26H69.5a20.92 20.92 0 0 1-11.38 11.36c-11.25 4.68-22.92-.12-27.61-11.38h-23v-26h23C35.2 26 46.87 21.23 58.12 25.92A20.93 20.93 0 0 1 69.5 37.29Z"
                    className="cls-2"
                />
                <path
                    d="M52.51 29.39A3 3 0 0 0 50 28a3 3 0 0 0-2.56 1.4h-3.11a1.51 1.51 0 0 0-1.52 1.52v.21a1.5 1.5 0 0 0 1.52 1.51h3.06A3 3 0 0 0 50 34a3 3 0 0 0 2.56-1.41h3.08a1.5 1.5 0 0 0 1.5-1.51v-.21a1.51 1.51 0 0 0-1.5-1.52Z"
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
