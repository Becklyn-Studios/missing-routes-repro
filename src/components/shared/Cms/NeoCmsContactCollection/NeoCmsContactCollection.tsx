import React, { PropsWithChildren } from "react";
import { NeoHeadline } from "../../NeoHeadline/NeoHeadline";

export interface NeoCmsContactCollectionProps {
  background?: boolean;
  headline?: string;
  headlineLevel?: number;
  single: boolean;
}

export const NeoCmsContactCollection: React.FC<
  PropsWithChildren<NeoCmsContactCollectionProps>
> = ({ headline, headlineLevel = 2, children }) => (
  <div className="neo-cms-contact-collection">
    <div className="contactCollection">
      {headline && <NeoHeadline level={headlineLevel}>{headline}</NeoHeadline>}
      {children}
    </div>
  </div>
);
