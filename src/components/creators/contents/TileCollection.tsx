import { NeoCmsTileCollection } from "@components/shared/Cms/NeoCmsTileCollection/NeoCmsTileCollection";
import { NeoTile } from "@components/shared/NeoTile/NeoTile";
import { normalizeHeadlineLevel, normalizeImage } from "@lib/contentful/util";
import { ContentfulLink } from "@type/contentful/ContentfulLink";
import { ContentfulMedia } from "@type/contentful/ContentfulMedia";
import React from "react";

export interface TileCollectionProps {
    headline?: string;
    headlineLevel?: string;
    subline?: string;
    tiles: {
        teaserLine?: string;
        description?: string;
        icon?: ContentfulMedia;
        image?: ContentfulMedia;
    }[];
    button?: ContentfulLink;
    maxTilesPerRow?: "2" | "3" | "4";
}

export const TileCollection: React.FC<TileCollectionProps> = ({
    headline,
    headlineLevel,
    subline,
    tiles,
    button,
    maxTilesPerRow,
}) => {
    const normalizedButton = button && { ...button, target: "_blank" };
    const normalizedMaxTiles =
        maxTilesPerRow && (isNaN(+maxTilesPerRow) ? undefined : (+maxTilesPerRow as 3));

    return (
        <NeoCmsTileCollection
            button={normalizedButton}
            headline={headline}
            headlineLevel={normalizeHeadlineLevel(headlineLevel)}
            maxTilesPerRow={normalizedMaxTiles}
            subline={subline}>
            {tiles.map(({ teaserLine, description, icon, image }, key) => (
                <NeoTile
                    key={key}
                    teaserLine={teaserLine}
                    description={description}
                    icon={normalizeImage(icon)}
                    image={normalizeImage(image)}
                />
            ))}
        </NeoCmsTileCollection>
    );
};
