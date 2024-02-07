import { NeoCmsEventCollection } from "@components/shared/Cms/NeoCmsEventCollection/NeoCmsEventCollection";
import { NeoEventTeaser } from "@components/shared/NeoEventTeaser/NeoEventTeaser";
import { NeoHeadline } from "@components/shared/NeoHeadline/NeoHeadline";
import { getEvents } from "@lib/contentful/api/events";
import { Rte } from "@lib/rte";
import { normalizeDateFormatForLanguage, normalizeHeadlineLevel } from "@lib/contentful/util";
import React from "react";
import { ContentfulLink } from "@type/contentful/ContentfulLink";
import { draftMode } from "next/headers";
import { getCurrentLocale } from "@lib/layers/state/server";

export interface EventCollectionProps {
    headline: string;
    headlineLevel?: string;
    showAllEvents?: "Yes";
    linkToAllEvents?: ContentfulLink;
}

export const EventCollection: React.FC<EventCollectionProps> = async ({
    headline,
    headlineLevel,
    showAllEvents,
    linkToAllEvents,
}) => {
    const locale = getCurrentLocale();
    const { isEnabled } = draftMode();
    const events = await getEvents(
        { limit: showAllEvents ? undefined : 3, locale },
        { isDraftMode: isEnabled }
    );
    const link =
        showAllEvents === "Yes" && linkToAllEvents
            ? {
                  title: linkToAllEvents.title,
                  url: linkToAllEvents.url ?? "",
              }
            : undefined;

    return (
        <NeoCmsEventCollection
            headline={headline}
            headlineLevel={normalizeHeadlineLevel(headlineLevel)}
            link={link}>
            {events.map(({ title, startDate, endDate, teaserDescription, eventPageLink }, key) => (
                <NeoEventTeaser
                    key={key}
                    date={`${normalizeDateFormatForLanguage(
                        startDate,
                        locale
                    )} - ${normalizeDateFormatForLanguage(endDate, locale)}`}
                    linkText={eventPageLink?.title}
                    linkUrl={eventPageLink?.url}>
                    <NeoHeadline level={4}>{title}</NeoHeadline>
                    <Rte content={teaserDescription} />
                </NeoEventTeaser>
            ))}
        </NeoCmsEventCollection>
    );
};
