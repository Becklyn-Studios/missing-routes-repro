"use client";

import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { cn } from "@lib/util";
import React, { PropsWithChildren, useState } from "react";
import "./NeoToggle.scss";

export interface NeoToggleProps {
  label: string;
}

export const NeoToggle: React.FC<PropsWithChildren<NeoToggleProps>> = ({
  label,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={"neo-toggle"}>
      <span className="toggle-link" onClick={() => setIsOpen(!isOpen)}>
        <NeoIcon icon={isOpen ? "minus" : "plus"} />
        {label}
      </span>
      <div className={cn("toggle-content", { expanded: isOpen })}>
        {children}
      </div>
    </div>
  );
};
