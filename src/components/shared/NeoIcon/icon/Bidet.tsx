import React, { SVGProps } from "react";

export const Bidet: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 80 80" {...props}>
            <style>
                {
                    ".st2{fill:none;stroke:#4a4a4a;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
                }
            </style>
            <g id="Icon">
                <path d="M16.178 8.675h5.023v13.473h-5.023z" className="st2" />
                <path
                    d="M26.697 15.057H21.2v-3.723h11.386l.289 1.763zM21.59 45.393h28.786c12.838 0 23.245-10.407 23.245-23.245H11.474v35.048h51.308V41.802"
                    className="st2"
                />
            </g>
        </svg>
    );
};
