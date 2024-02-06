import React, { SVGProps } from "react";

export const Thermostaticfaucet: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 80 80" {...props}>
            <style>
                {
                    ".st21,.st6{stroke:#534f4e;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10}.st6{fill:none;stroke-linejoin:round}.st21{fill:#534f4e}"
                }
            </style>
            <g id="Icon">
                <path
                    d="M69.01 3.853v11.149M63.436 9.428h11.149M5.415 9.428h11.149"
                    className="st6"
                />
                <circle cx={39.074} cy={51.763} r={24.384} className="st6" />
                <circle
                    cx={39.189}
                    cy={33.706}
                    r={2.293}
                    style={{
                        fill: "#534f4e",
                        stroke: "#534f4e",
                        strokeWidth: 2,
                        strokeMiterlimit: 10,
                    }}
                />
                <path
                    d="M39.074 23.411v-5.409M20.849 30.044l-3.476-4.143M11.152 46.84l-5.326-.94M14.52 65.939l-4.684 2.704M57.298 30.044l3.477-4.143M66.995 46.84l5.326-.94M63.627 65.939l4.684 2.704"
                    className="st21"
                />
                <text
                    style={{
                        fontSize: "19.17763px",
                        fontFamily: "&quot",
                        fill: "#534f4e",
                    }}
                    transform="translate(26.585 64.492)">
                    {"\xB0C"}
                </text>
            </g>
        </svg>
    );
};
