import React, { SVGProps } from "react";

export const File: React.FC<SVGProps<SVGSVGElement>> = props => {
    return (
        <svg viewBox="0 0 19 20" {...props}>
            <path d="M18.478 7.957a.761.761 0 0 1 0 1.086l-8.652 8.63c-1.435 1.457-3.065 2.218-4.63 2.218-.392 0-.783-.043-1.174-.152-1.522-.413-2.696-1.587-3.109-3.174-.522-1.956.174-4.087 1.935-5.848l9.652-9.63c1.565-1.565 3.74-1.065 5 .196 1.717 1.717 1.24 3.739.087 4.89L7.87 15.87c-1.283 1.282-2.74 1.195-3.479.434-.739-.76-.826-2.174.457-3.478l6.565-6.565a.761.761 0 0 1 1.087 0 .761.761 0 0 1 0 1.087l-6.609 6.565c-.565.565-.652 1.109-.456 1.326.217.218.76.13 1.326-.435l9.717-9.717c.979-.978.565-2.087-.087-2.74-.739-.738-1.934-1.108-2.848-.173l-9.608 9.63c-1.37 1.37-1.935 2.957-1.544 4.37.283 1.043 1.044 1.826 2.044 2.087 1.348.37 2.891-.24 4.326-1.674l8.652-8.652c.283-.261.76-.261 1.065.022Z" />
        </svg>
    );
};