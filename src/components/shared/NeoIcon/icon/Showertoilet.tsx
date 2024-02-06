import React, { SVGProps } from "react";

export const Showertoilet: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 80 80" {...props}>
            <style>
                {
                    ".st22,.st6{fill:none;stroke:#534f4e;stroke-linecap:round;stroke-linejoin:round}.st6{stroke-width:2;stroke-miterlimit:10}.st22{stroke-width:2.82782}"
                }
            </style>
            <g id="Icon">
                <path d="M51.022 29.124c0-.01 0-.02.002-.03" className="st22" />
                <path
                    d="M49.304 24.539c-.921-.846-2.154-1.345-3.56-1.345-3.193 0-5.177 4.525-6.6 7.79l-.278 3.164"
                    style={{
                        fill: "none",
                        stroke: "#534f4e",
                        strokeWidth: 2.82782,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeDasharray: ".05581,5.02265",
                    }}
                />
                <path d="m38.647 36.644-.002.026" className="st22" />
                <path
                    d="M39.927 62.618h9.386c10.191 0 18.453-8.262 18.453-18.453H12.234v34.262h41.909V62.282M29.365 40.07h37.693"
                    className="st6"
                />
                <circle cx={31.657} cy={49.683} r={2.04} className="st6" />
                <path d="M12.234 1.573h10.077v42.592H12.234zM26.254 37.627V5.339" className="st6" />
            </g>
        </svg>
    );
};
