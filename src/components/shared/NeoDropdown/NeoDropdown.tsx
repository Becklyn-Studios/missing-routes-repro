"use client";

import React, { ChangeEventHandler } from "react";
import "./NeoDropdown.scss";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { cn } from "@lib/util";
import { InputWrapper, InputWrapperProps } from "@lib/inputs";
import { useTranslation } from "@lib/layers/translate/client";

type VariationTheme = "light" | "grey" | "dark";

export interface NeoDropdownOptionProps {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface NeoDropdownProps extends InputWrapperProps {
    options: NeoDropdownOptionProps[];
    defaultValue?: string;
    value?: string;
    uid: string;
    variation?: VariationTheme;
    label: string;
    disabled?: boolean;
    placeholder?: string;
    onSelect?: ChangeEventHandler<HTMLSelectElement>;
    error?: string;
    fullWidth?: boolean;
    required?: boolean;
}

export const NeoDropdown: React.FC<NeoDropdownProps> = ({
    options,
    defaultValue,
    value,
    uid,
    variation = "light",
    label,
    disabled = false,
    placeholder,
    onSelect,
    error,
    fullWidth,
    required,
    ...props
}) => {
    const t = useTranslation();
    return (
        <InputWrapper {...props}>
            <div
                className={cn("neo-dropdown", variation, {
                    disabled,
                    "w-full": fullWidth,
                })}>
                <label className={cn({ active: !!value })} htmlFor={uid}>
                    {label}
                </label>
                <NeoIcon icon="chevronDown" />
                <select
                    className={cn({ active: !!value })}
                    id={uid}
                    name={uid}
                    disabled={disabled}
                    onChange={onSelect}
                    defaultValue={defaultValue ? defaultValue : undefined}
                    value={defaultValue ? undefined : value ?? ""}
                    required={required}>
                    <option value={""}>{placeholder ?? t.contentful.text.pleaseSelect}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value} disabled={option.disabled}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <span className="neo-dropdown-error">{error}</span>}
            </div>
        </InputWrapper>
    );
};
