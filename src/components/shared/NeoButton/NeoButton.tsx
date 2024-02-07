"use client";
import React, { ChangeEvent, ChangeEventHandler, PropsWithChildren } from "react";
import "./NeoButton.scss";
import { tracking } from "@lib/tracking/tracking";

type ButtonVariation = "primary" | "secondary" | "ghost" | "ghost-dark";

export interface NeoButtonProps {
    variation?: ButtonVariation;
    href?: string;
    target?: string;
    onClick?: ChangeEventHandler<HTMLButtonElement | HTMLHRElement>;
    disabled?: boolean;
    type?: HTMLButtonElement["type"];
    className?: string;
}

export const NeoButton: React.FC<PropsWithChildren<NeoButtonProps>> = ({
    variation = "primary",
    href = "",
    target,
    disabled = false,
    onClick,
    children,
    className,
    ...props
}) => {
    const tag = href ? "a" : "button";

    const buttonProps: {
        [key: string]: string | boolean | Function;
    } = {
        className: `neo-button ${variation}`,
        disabled: tag === "button" && disabled,
        ...props,
    };

    if (tag === "a") {
        buttonProps.href = href;
        buttonProps.target = target ?? href.startsWith("http") ? "_blank" : "_self";
    }

    buttonProps.onClick = (event: ChangeEvent<HTMLButtonElement | HTMLHRElement>) => {
        tracking(event.currentTarget.innerText, href);
        if (onClick) {
            onClick(event);
        }
    };

    return React.createElement(tag, buttonProps, children);
};
