import React, { SVGProps } from "react";

export const BoxNoEuro1: React.FC<SVGProps<SVGSVGElement>> = props => {
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
                    d="m23.93 26.28 34.75-16.7 17.38 8.54V73L41.3 89.69l-17.37-8.52V26.28zM41.3 34.8v55.02M76.07 18.14 41.3 34.83M23.93 26.29l17.37 8.54"
                    className="cls-2"
                />
                <path d="m57.46 51.61-2.29 2.68c-.13.14-.24.15-.24 0v-2.62a.59.59 0 0 1 .07-.37l2.42-2.91a1 1 0 0 1 .38-.31l2.38-1.14c.12-.06.21 0 .21.11V61a.38.38 0 0 1-.21.32l-2.55 1.22c-.13.07-.21 0-.21-.1Z" />
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
