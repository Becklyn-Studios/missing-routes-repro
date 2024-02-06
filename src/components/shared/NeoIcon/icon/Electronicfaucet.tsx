import React, { SVGProps } from "react";

export const Electronicfaucet: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 80 80" {...props}>
            <style>
                {
                    ".st5,.st6{fill:none;stroke:#534f4e;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.st6{stroke-miterlimit:10}"
                }
            </style>
            <g id="Icon">
                <path
                    d="M35.292 49.686c.586-.002 1.066 1.054 1.072 2.36.007 1.305-.463 2.366-1.05 2.369-.586.003-.216-1.058-.222-2.363-.006-1.306-.387-2.363.2-2.366z"
                    className="st6"
                />
                <path
                    d="M39.576 44.73c3.516 3.387 4.675 9.282.683 13.827M44.565 39.626c7.938 6.51 7.364 17.466 1.17 23.695"
                    className="st5"
                />
                <path d="M49.622 34.644C60.754 44.1 59.9 59.245 51.272 68.083" className="st5" />
                <path d="M19.623 2.466h14.351v69.385H19.623z" className="st6" />
                <path d="M59.74 20.7H33.974V10.065h42.593l.827 5.038z" className="st6" />
            </g>
        </svg>
    );
};
