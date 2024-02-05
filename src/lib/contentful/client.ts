import { createClient } from "contentful";

export const getClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID ?? "",
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN ?? "",
  });
};
