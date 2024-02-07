"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { StateLayer } from "./types";

const StateLayerContext = createContext<StateLayer>({} as StateLayer);

export const StateLayerProvider: React.FC<PropsWithChildren<StateLayer>> = ({
  children,
  ...props
}) => (
  <StateLayerContext.Provider value={props}>
    {children}
  </StateLayerContext.Provider>
);

export const useStateLayer = () => useContext(StateLayerContext);

export const useCurrentLocale = () => {
  const { currentLocale } = useStateLayer();
  return currentLocale;
};

export const useCurrentRegion = () => {
  const { currentRegion } = useStateLayer();
  return currentRegion;
};

export const useCurrentLang = () => {
  const { currentLang } = useStateLayer();
  return currentLang;
};

export const useCurrentPageId = () => {
  const { currentPageId } = useStateLayer();

  if (!currentPageId) {
    throw new Error(
      "No currentPageId found. This hook should only be called inside of the app.",
    );
  }

  return currentPageId;
};

export const useCurrentSlug = () => {
  const { currentSlug } = useStateLayer();

  if (!currentSlug) {
    throw new Error(
      "No currentSlug found. This hook should only be called inside of the app.",
    );
  }

  return currentSlug;
};
