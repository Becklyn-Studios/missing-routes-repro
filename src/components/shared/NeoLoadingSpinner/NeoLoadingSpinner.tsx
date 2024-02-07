import React, { CSSProperties } from "react";
import "./NeoLoadingSpinner.scss";

export interface NeoLoadingSpinnerProps {
    size?: number;
    color?: string;
    thickness?: number;
    speed?: number;
}

const getSpinnerStyle = (size: number): CSSProperties => ({
    display: "inline-block",
    width: `${size}rem`,
    height: `${size}rem`,
});

const getAfterStyle = (
    size: number,
    thickness: number,
    color: string,
    speed: number
): CSSProperties => ({
    content: " ",
    display: "block",
    width: `${size - thickness * 2}rem`,
    height: `${size - thickness * 2}rem`,
    margin: 0,
    borderRadius: "50%",
    boxSizing: "initial",
    border: `${thickness}rem solid ${color}`,
    borderColor: `${color} transparent ${color} transparent`,
    animation: `lds-dual-ring ${speed}s linear infinite`,
});

export const NeoLoadingSpinner: React.FC<NeoLoadingSpinnerProps> = ({
    size = 5,
    color = "#000",
    thickness = 0.5,
    speed = 1,
}) => {
    return (
        <div className="neo-loading-spinner lds-dual-ring" style={getSpinnerStyle(size)}>
            <div style={getAfterStyle(size, thickness, color, speed)} />
        </div>
    );
};
