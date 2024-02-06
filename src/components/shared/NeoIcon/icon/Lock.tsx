import React, { SVGProps } from "react";

export const Lock: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 92 92" {...props}>
            <path d="M73 33h-3v-6.9C70 11.3 60 1 46 1S22 11.3 22 26.1V33h-3c-2.2 0-4 1.8-4 4v50c0 2.2 1.8 4 4 4h54c2.2 0 4-1.8 4-4V37c0-2.2-1.8-4-4-4zm-43-6.9C30 15.9 36.6 9 46 9s16 6.9 16 17.1V33H30v-6.9zM69 83H23V41h46v42z" />
        </svg>
    );
};
