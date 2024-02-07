export const getPageKey = (page: any) => {
  if (!page) {
    return undefined;
  }

  return page?.sys?.contentType?.sys?.id;
};

export const getContentKeys = (
  page: any,
): { id: string; contentId: string }[] =>
  page?.fields?.contents?.map(({ sys }: any) => ({
    id: sys.id,
    contentId: sys?.contentType?.sys?.id,
  })) ?? [];
