import {
  initializeStateLayer,
  setCurrentPageId,
  setCurrentSlug,
} from "./state/server";
import { initializeSegmentLayer } from "./segments/server";
import { initializeNotablesLayer } from "./notables/server";
import { initializeTranslateLayer } from "./translate/server";
import { PropsWithChildren } from "react";
import { StateLayerProvider } from "./state/client";
import { NotablesLayerProvider } from "./notables/client";
import { TranslateLayerProvider } from "./translate/client";

export type InitializeLayersProps = Parameters<
  typeof initializeStateLayer
>[0] & {
  slug?: string[];
};

export const initializeLayers = async (params: InitializeLayersProps) => {
  const state = initializeStateLayer(params);

  const { currentLang, currentRegion, currentLocale } = state;

  if (!currentLang || !currentRegion || !currentLocale) {
    throw new Error(
      `Could not find locale, region or lang: ${JSON.stringify(params)}`,
    );
  }

  const segment = await initializeSegmentLayer(currentLocale);
  const { segments, bySlug } = segment;

  if (!segments) {
    throw new Error(`Could not generate segments: ${JSON.stringify(params)}`);
  }

  if (params.slug) {
    const { region, lang, slug } = params;
    setCurrentSlug(slug);
    const currentPageId = bySlug[[region, lang, ...slug].join("/")];

    if (currentPageId) {
      setCurrentPageId(currentPageId.id);
    }
  }

  const notables = initializeNotablesLayer();
  const { urls } = notables;

  if (!urls) {
    throw new Error(`Could not generate notables: ${JSON.stringify(params)}`);
  }

  const translate = await initializeTranslateLayer({ locale: currentLocale });
  const { dictionary } = translate;

  if (!dictionary) {
    throw new Error(`Could not generate dictionary: ${JSON.stringify(params)}`);
  }

  return {
    state,
    segment,
    notables,
    translate,
  };
};

export const LayersProviders: React.FC<
  PropsWithChildren<Awaited<ReturnType<typeof initializeLayers>>>
> = ({ state, notables, translate, children }) => (
  <StateLayerProvider {...state}>
    <NotablesLayerProvider {...notables}>
      <TranslateLayerProvider {...translate}>{children}</TranslateLayerProvider>
    </NotablesLayerProvider>
  </StateLayerProvider>
);

export const Layers: React.FC<
  PropsWithChildren<InitializeLayersProps>
> = async ({ children, ...params }) => {
  const props = await initializeLayers(params);
  return <LayersProviders {...props}>{children}</LayersProviders>;
};
