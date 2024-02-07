"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { NotablesLayer } from "./types";

const NotablesLayerContext = createContext<NotablesLayer>({} as NotablesLayer);

export const NotablesLayerProvider: React.FC<
  PropsWithChildren<NotablesLayer>
> = ({ children, ...props }) => (
  <NotablesLayerContext.Provider value={props}>
    {children}
  </NotablesLayerContext.Provider>
);

export const useNotablesLayer = () => useContext(NotablesLayerContext);

export const useNotableUrls = () => {
  const { urls } = useNotablesLayer();
  return urls;
};
