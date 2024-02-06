import React, { SVGProps } from "react";

export const Facebook: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 30 30" {...props}>
            <path
                fillRule="nonzero"
                d="M28.345 0H1.655C.741 0 0 .741 0 1.655v26.69C0 29.259.741 30 1.655 30h14.38V18.398h-3.906v-4.541h3.905v-3.341c0-3.875 2.37-5.985 5.825-5.985a33.207 33.207 0 0 1 3.486.176v4.05h-2.38c-1.882 0-2.25.89-2.25 2.203v2.892h4.5l-.584 4.541H20.69V30h7.655c.914 0 1.655-.741 1.655-1.655V1.655C30 .741 29.259 0 28.345 0Z"
            />
        </svg>
    );
};
