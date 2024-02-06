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
