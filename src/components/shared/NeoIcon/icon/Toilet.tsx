import React, { SVGProps } from "react";

export const Toilet: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 80 80" {...props}>
            <style>
                {
                    ".st6{fill:none;stroke:#534f4e;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
                }
            </style>
            <g id="Icon">
                <path
                    d="M39.927 62.618h9.386c10.191 0 18.453-8.262 18.453-18.453H12.234v34.262h41.909V62.282M29.365 40.07h37.693M12.234 1.573h10.077v42.592H12.234z"
                    className="st6"
                />
            </g>
        </svg>
    );
};
