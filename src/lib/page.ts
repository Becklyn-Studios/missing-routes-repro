export const getContentIds = (page: any): { id: string; contentId: string }[] =>
  page?.fields?.contents?.map(({ sys }: any) => ({
    id: sys.id,
    contentId: sys?.contentType?.sys?.id,
  })) ?? [];
