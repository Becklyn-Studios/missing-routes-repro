import React, { PropsWithChildren } from "react";
import "./NeoCheckbox.scss";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { cn } from "@lib/util";

export interface NeoCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    error?: string;
    required?: boolean;
}

export const NeoCheckbox: React.FC<PropsWithChildren<NeoCheckboxProps>> = ({
    disabled,
    error,
    required,
    children,
    ...props
}) => {
    return (
        <div
            className={cn("neo-checkbox", {
                disabled: disabled,
            })}>
            <label>
                <input
                    type="checkbox"
                    disabled={disabled}
                    required={required}
                    {...props}
                />
                {children}
                {required && "*"}
            </label>
            {error && (
                <div className="error">
                    <NeoIcon icon="warning" />
                    <span>{error}</span>
                </div>
            )}
        </div>
    );
};
