import React, { SVGProps } from "react";

export const Heater: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 80 80" {...props}>
            <style>
                {
                    ".st6{fill:none;stroke:#534f4e;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
                }
            </style>
            <g id="Icon">
                <path
                    d="M29.585 26.316c0 6.771-4.878 6.771-4.878 13.543 0 6.775 4.878 6.775 4.878 13.551s-4.878 6.776-4.878 13.552M42.644 26.316c0 6.771-4.878 6.771-4.878 13.543 0 6.775 4.878 6.775 4.878 13.551s-4.878 6.776-4.878 13.552M55.703 26.316c0 6.771-4.878 6.771-4.878 13.543 0 6.775 4.878 6.775 4.878 13.551s-4.878 6.776-4.878 13.552M10.488 75.679h59.267"
                    className="st6"
                />
                <path d="M8.186 27.795 40 4.321l31.814 23.474" className="st6" />
            </g>
        </svg>
    );
};
