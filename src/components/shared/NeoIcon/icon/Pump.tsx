import React, { SVGProps } from "react";

export const Pump: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 80 80" {...props}>
            <style>
                {
                    ".st2{fill:none;stroke:#4a4a4a;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
                }
            </style>
            <g id="Icon">
                <path
                    d="M20.885 45.63H9.22v13.881h30.864c-8.952 0-16.533-5.82-19.199-13.88zM40.084 59.511h0z"
                    className="st2"
                />
                <path
                    d="M70.949 19.05H40.084c-11.173 0-20.23 9.057-20.23 20.23s9.057 20.231 20.23 20.231c11.174 0 20.231-9.057 20.231-20.23 0-2.221-.37-4.352-1.032-6.35H70.95V19.05z"
                    className="st2"
                />
                <circle cx={40.084} cy={39.281} r={0.546} className="st2" />
                <path
                    d="M40.266 23.331c-1.805 3.129-2.007 4.209-1.393 8.157l.422 2.717M53.988 31.463c-3.612.001-4.649.366-7.761 2.872l-2.142 1.725M53.806 47.412C52 44.285 51.165 43.57 47.44 42.127l-2.564-.992M39.903 55.23c1.805-3.129 2.007-4.209 1.393-8.157l-.422-2.717M26.181 47.098c3.612-.001 4.649-.366 7.761-2.872l2.142-1.725M26.362 31.149c1.808 3.127 2.642 3.842 6.368 5.285l2.564.992"
                    className="st2"
                />
                <circle cx={40.084} cy={39.281} r={0.546} className="st2" />
                <circle cx={40.084} cy={39.281} r={5.136} className="st2" />
            </g>
        </svg>
    );
};
