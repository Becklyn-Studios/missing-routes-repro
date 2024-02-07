"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { TranslateLayer } from "./types";

const TranslateLayerContext = createContext<TranslateLayer>(
  {} as TranslateLayer,
);

export const TranslateLayerProvider: React.FC<
  PropsWithChildren<TranslateLayer>
> = ({ children, ...props }) => (
  <TranslateLayerContext.Provider value={props}>
    {children}
  </TranslateLayerContext.Provider>
);

export const useTranslateClient = () => useContext(TranslateLayerContext);

export const useTranslation = () => {
  const { dictionary } = useTranslateClient();
  return dictionary;
};
