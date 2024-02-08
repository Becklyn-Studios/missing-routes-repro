import React from "react";
import { Rte } from "@lib/rte";
import { NeoNoResultBox } from "../NeoNoResultBox/NeoNoResultBox";
import { getTranslation } from "@lib/layers/translate/server";

export const FinderNoResultBox: React.FC = () => {
    const t = getTranslation();
    return (
        <div className="grid">
            <NeoNoResultBox>
                <Rte content={t.contentful.richText.articleListingNoResultsHint} />
            </NeoNoResultBox>
        </div>
    );
};
