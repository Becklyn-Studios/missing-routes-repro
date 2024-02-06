import { NeoCmsTextMedia } from "@/components/shared/Cms/NeoCmsTextMedia/NeoCmsTextMedia";
import { NeoHeadline } from "@/components/shared/NeoHeadline/NeoHeadline";
import { normalizeHeadlineLevel } from "@/lib/contentful/util";
import React from "react";

export const TextMedia: React.FC<any> = ({
  headline,
  headlineLevel,
  headlineType,
}) => {
  return (
    <NeoCmsTextMedia>
      <div className={"content"}>
        {headline && (
          <NeoHeadline
            level={normalizeHeadlineLevel(headlineLevel || headlineType)}
          >
            {headline}
          </NeoHeadline>
        )}
      </div>
    </NeoCmsTextMedia>
  );
};
