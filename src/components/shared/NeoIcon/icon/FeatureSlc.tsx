import React, { SVGProps } from "react";

export const FeatureSlc: React.FC<SVGProps<SVGSVGElement>> = props => {
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
                        ".cls-4,.cls-5{fill:none}.cls-4{stroke:#e20613;stroke-linejoin:round;stroke-linecap:round;stroke-width:2.5px}.cls-5,.cls-7{stroke:#1d1d1b;stroke-miterlimit:10}.cls-5{stroke-width:1.8px}.cls-7{fill:#1d1d1b;stroke-width:.94px}"
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
                    d="m33.19 82.23 14.63-.13M33.19 82.23l6.07-4.69M33.19 82.27l6.12 4.43M66.68 82.02l-14.62.13M66.68 82.02l-6.06 4.68M66.68 81.98l-6.12-4.43"
                    className="cls-4"
                />
                <path d="M15.51-5.97h69.08v37.08H15.51z" className="cls-5" />
                <path
                    d="M82.51 34.5H17.6"
                    style={{
                        stroke: "#1d1d1b",
                        strokeMiterlimit: 10,
                        strokeLinecap: "round",
                        strokeWidth: "2.5px",
                        fill: "#fff",
                    }}
                />
                <path
                    d="m37.66 36.53-.44 2.35 2.47-.36v-1.99h-2.03zM33.43 38l-1.67 3.43v.49l2.59-.07.95-.83L33.43 38zM35.23 43.56l1.89-.56.64 2.52a18.26 18.26 0 0 1-2.18 1.07c0-.09-.35-3.03-.35-3.03ZM28.3 40c.12.11 1.09 3.81 1.09 3.81L26 42.34ZM30.36 49.49c.22-.17 1.79-2.09 1.79-2.09l1.38 2.32-2.46.36ZM26.07 47.4l1.56 1.27.14 2.57-3.09.19 1.39-4.03zM30.61 53.81c-1.18 1.3-2.91 2.69-2.11 2.36.06 0 3.53 0 3.39-.1a23.4 23.4 0 0 1-1.28-2.26ZM18.06 55.25l1.89.1v2.75l-2.45.24.56-3.09zM27.05 60.92l1.64.09.25 2.77-2.03.2.14-3.06z"
                    className="cls-7"
                />
                <path
                    d="M37 52.82 34.28 60c-.83 2.22.1 4 2.53 4.92l13.13 4.94 2.47.93 43.38 16.3 12.76-33.93-37.44-14.09c-16.49-6.2-28.8-.44-34.11 13.75Z"
                    style={{
                        strokeWidth: "1.8px",
                        stroke: "#1d1d1b",
                        strokeMiterlimit: 10,
                        fill: "#fff",
                    }}
                />
                <path
                    d="m65 75.49 1.19-3.17c2.1-5.59-8.83-12.28-16.62-14.78a55.47 55.47 0 0 0-13.3-2.75"
                    className="cls-5"
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
