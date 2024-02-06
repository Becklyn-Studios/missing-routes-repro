import React, { SVGProps } from "react";

export const CarrierCardEuro1: React.FC<SVGProps<SVGSVGElement>> = props => {
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
                <path d="M22.83 16.68h54.25v66.75H22.83z" className="cls-2" />
                <path
                    d="M52.57 21.39a3.1 3.1 0 0 0-5.25 0h-3.14A1.55 1.55 0 0 0 42.63 23v.22a1.54 1.54 0 0 0 1.55 1.55h3.14a3.1 3.1 0 0 0 5.25 0h3.15a1.54 1.54 0 0 0 1.56-1.55V23a1.55 1.55 0 0 0-1.56-1.56Z"
                    className="cls-2"
                />
                <path d="M48.85 48.63h-.05l-2.48 1.53c-.14.08-.25 0-.25-.12v-2.57a.32.32 0 0 1 .16-.29l2.62-1.7a.69.69 0 0 1 .41-.12h2.57a.21.21 0 0 1 .23.21v13.65a.21.21 0 0 1-.23.21h-2.75a.21.21 0 0 1-.23-.21Z" />
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
