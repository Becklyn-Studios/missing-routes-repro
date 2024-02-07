"use client";

export const isMobile = () => {
  if (typeof window !== "undefined") {
    const viewportWidth = window.innerWidth;
    const mobileBreakpoint = 768;
    return viewportWidth < mobileBreakpoint;
  }
  return false;
};
