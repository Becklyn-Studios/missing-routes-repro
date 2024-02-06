import React, { SVGProps } from "react";

export const Quote: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg x={0} y={0} viewBox="0 0 78 56" {...props}>
            <style>{".st0{fill:#c51a1b}"}</style>
            <path
                d="M18.5 0C8.3 0 0 8.9 0 19.9c0 9.2 5.6 16.9 13.7 19.2-1.1 4.7-3 8.6-5.6 11.6l-4.3 5 6.4-1.8C23.1 50.2 37 38 37 19.9 37 8.9 28.7 0 18.5 0zM59.5 0C49.3 0 41 8.9 41 19.9c0 9.2 5.6 16.9 13.7 19.2-1.1 4.7-3 8.6-5.6 11.6l-4.3 5 6.4-1.8C64.1 50.2 78 38 78 19.9 78 8.9 69.7 0 59.5 0z"
                className="st0"
            />
        </svg>
    );
};
