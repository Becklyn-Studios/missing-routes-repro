"use client";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import React from "react";
import "./NeoBackToTop.scss";

export const NeoBackToTop: React.FC = () => (
    <button
        type={"button"}
        onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }}
        className={"neo-back-to-top"}>
        <NeoIcon icon={"arrowThinUp"} />
    </button>
);
