import { getClient } from "./client";

export const getPageById = async (id: string, options: any = {}) => {
  const client = getClient();
  return await client.getEntry(id, options);
};
