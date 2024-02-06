export const normalizeHeadlineLevel = (
  level?: string | number | null,
  fallback: number = 2,
): number => {
  if (level) {
    if (typeof level === "number") {
      return +`${level}`;
    } else {
      if (level.toLowerCase().startsWith("h")) {
        return +level.slice(1);
      } else {
        return +level;
      }
    }
  } else {
    return +fallback;
  }
};

export const normalizeImageUrl = (url: string) =>
  url?.startsWith("//") ? `https:${url}` : url;

export const normalizeImage = (
  props?: any,
  fallback?: { alt?: string; src?: string },
) => {
  if (!props) {
    return undefined;
  }

  const { title: alt, file } = props;
  let src = file?.url;

  if (src) {
    src = normalizeImageUrl(src);
  }

  return {
    src,
    alt,
    ...fallback,
  };
};
