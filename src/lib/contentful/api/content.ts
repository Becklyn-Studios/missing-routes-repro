import { getClient } from "../client";
import { normalizer } from "../normalizer";

export const getContent = async (id: string, locale: string) => {
  const client = getClient();
  const data = await client.getEntry(id, {
    include: 3,
    locale,
  });

  return normalizer(data) as any;
};
