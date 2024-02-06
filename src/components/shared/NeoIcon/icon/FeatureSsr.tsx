import React, { SVGProps } from "react";

export const FeatureSsr: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 100 100" {...props}>
            <defs>
                <clipPath id="clip-path">
                    <path
                        d="M100 50A50 50 0 1 1 50 0a50 50 0 0 1 50 50Z"
                        style={{
                            fill: "none",
                        }}
                    />
                </clipPath>
                <style>
                    {
                        ".cls-4,.cls-7{fill:none}.cls-4{stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:1.8px}.cls-5{fill:#1d1d1b}.cls-7{stroke:#e20613;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.5px}"
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
            <g
                id="illu"
                style={{
                    clipPath: "url(#clip-path)",
                }}>
                <path
                    d="m47.24 50-4.36 5.72c-1.35 1.77-1 3.63 1 5.1l10.47 8 2 1.5 55.84 42.51 20.62-27.08-51.17-38.89C68.48 36.84 55.86 38.71 47.24 50Z"
                    className="cls-4"
                />
                <path
                    d="m66.3 78 1.93-2.53C71.62 71 63.59 62 57.26 57.66a51.7 51.7 0 0 0-11.22-6"
                    className="cls-4"
                />
                <path d="M84.71 22.21" className="cls-5" />
                <path
                    d="M20.67 37.2h61.72l-60.31 8.35-1.41-8.35z"
                    style={{
                        fill: "#e20613",
                    }}
                />
                <path d="M15.48-4.15h68.84v41.34H15.48z" className="cls-4" />
                <path
                    d="m43.24 94.58-7.49-9.89 11.76-4.45M90.39 68.76l-4.3-11.64-10.08 7.51"
                    className="cls-7"
                />
                <path d="M35.75 84.69A37 37 0 0 0 86.1 57.12" className="cls-7" />
            </g>
            <path
                id="obererRING"
                d="M50 1.8A48.2 48.2 0 1 1 1.8 50 48.25 48.25 0 0 1 50 1.8M50 0a50 50 0 1 0 50 50A50 50 0 0 0 50 0Z"
                className="cls-5"
            />
        </svg>
    );
};
