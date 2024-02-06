import React, { PropsWithChildren } from "react";

export const NeoCmsTextMedia: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={"neo-cms-text-media"}>
    <div className="text-media media">{children}</div>
  </div>
);
