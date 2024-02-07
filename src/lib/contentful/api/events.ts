import { ContentfulEvent } from "@type/contentful/ContentfulEvent";
import { ClientOptions, getClient } from "../client";
import { CONTENT_TYPES } from "../contentTypes";
import { normalizer } from "../normalizer";
import { BaseEntriesOptions } from "./util";

const checkCurrentBetweenStartAndEnd = (
  start: string,
  end: string,
): boolean => {
  const requiredStartDate = new Date(start).setHours(0, 0, 0, 0);
  const requiredEndDate = new Date(end).setHours(0, 0, 0, 0);
  const currentDate = new Date().setHours(0, 0, 0, 0);

  if (requiredStartDate && !requiredEndDate) {
    return requiredStartDate.valueOf() >= currentDate.valueOf();
  }
  if (requiredStartDate && requiredEndDate) {
    return (
      (currentDate.valueOf() >= requiredStartDate.valueOf() ||
        currentDate.valueOf() <= requiredStartDate.valueOf()) &&
      currentDate.valueOf() <= requiredEndDate.valueOf()
    );
  }
  return false;
};

export const getEvents = async (
  options: BaseEntriesOptions = {},
  clientOptions: ClientOptions,
) => {
  const { limit, locale } = options;
  const client = getClient(clientOptions);
  const events = await client.getEntries({
    content_type: CONTENT_TYPES.EVENT,
    order: ["fields.startDate"],
    limit,
    locale,
  });

  return events.items
    .filter(({ fields }) =>
      checkCurrentBetweenStartAndEnd(
        fields.startDate as string,
        fields.endDate as string,
      ),
    )
    .map((value) => normalizer(value)) as ContentfulEvent[];
};
