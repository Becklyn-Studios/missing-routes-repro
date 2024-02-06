import React, { SVGProps } from "react";

export const Washbasinfitting: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 80 80" {...props}>
            <style>
                {
                    ".st2{fill:none;stroke:#4a4a4a;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
                }
            </style>
            <g id="Icon">
                <path
                    d="M16.727 19.622h8.442v22.643h-8.442zM25.168 17.594l-8.441-1.423v-4.536h8.441z"
                    className="st2"
                />
                <path
                    d="M38.656 30.348H25.168V24.09h23.387l.486 2.963zM38.046 14.615H23.745h14.3z"
                    className="st2"
                />
                <path
                    d="M1.26 42.265h29.426v10.753c0 6.065 4.935 11 11 11h26.025c6.065 0 11-4.935 11-11V42.265"
                    style={{
                        fill: "none",
                        stroke: "#4a4a4a",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    }}
                />
            </g>
        </svg>
    );
};
