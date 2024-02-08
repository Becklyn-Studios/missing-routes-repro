"use client";

import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import React, { useRef } from "react";
import "./NeoInput.scss";
import { cn } from "@lib/util";
import { InputWrapper, InputWrapperProps } from "@lib/inputs";

export interface NeoInputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        InputWrapperProps {
    uid?: string;
    type?: NeoInputType;
    label?: string;
    value?: string;
    theme?: NeoInputTheme;
    error?: string;
    hint?: string;
}

export type NeoInputType = "text" | "search" | "file" | "password" | "email";
export type NeoInputTheme = "light" | "dark";

export const NeoInput: React.FC<NeoInputProps> = ({
    type = "text",
    id,
    uid,
    value,
    label,
    theme = "light",
    error,
    hint,
    className,
    required,
    ...props
}) => {
    const notEmpty = value && 0 < value?.length;
    const hasError = error !== undefined;
    const ref = useRef<HTMLInputElement | null>(null);

    const onClear = () => {
        if (ref.current) {
            ref.current.value = "";
        }
    };

    return (
        <InputWrapper {...props}>
            <div className={cn("neo-input-container", className)}>
                <div
                    className={cn({
                        "neo-input__wrap": true,
                        "neo-input__wrap--search": "search" === type,
                        "neo-input__wrap--file": "file" === type,
                        "neo-input__wrap--dark": "dark" === theme,
                        "neo-input__wrap--error": error,
                    })}>
                    <input
                        ref={ref}
                        className={cn({
                            "neo-input__element": true,
                            "neo-input__element--notEmpty": notEmpty,
                        })}
                        type={type}
                        placeholder={" "}
                        required={required}
                        id={id}
                        name={uid}
                        {...props}
                    />
                    <label className={"neo-input__label"} htmlFor={uid}>
                        {label}
                        {required && "*"}
                    </label>
                    <NeoIcon
                        className={cn({
                            "neo-input__icon": true,
                            "neo-input__icon--active": notEmpty || hasError,
                        })}
                        icon={!hasError ? `cross` : `warning`}
                        onClick={onClear}></NeoIcon>
                    {error && (
                        <span
                            className={cn({
                                "neo-input__errorMessage": true,
                                "neo-input__errorMessage--visible": hasError,
                            })}>
                            {error}
                        </span>
                    )}
                    {hint && <span className={"neo-input__hint"}>{hint}</span>}
                </div>
            </div>
        </InputWrapper>
    );
};
