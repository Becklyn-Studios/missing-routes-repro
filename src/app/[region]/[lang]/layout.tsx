import "@css/globals.scss";
import Script from "next/script";
import React, { PropsWithChildren } from "react";
import { fonts } from "@css/typography";
import { LangKey, RegionKey, getAvailableI18nPairs } from "@lib/i18n/locales";
import { draftMode } from "next/headers";
import { initializeLayers } from "@lib/layers";

interface LayoutProps {
  params: {
    region: RegionKey;
    lang: LangKey;
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const pairs = getAvailableI18nPairs();

  if (!pairs) {
    throw Error("No regions or no langs could be found.");
  }

  return pairs;
}

export default async function Layout({
  params,
  children,
}: PropsWithChildren<LayoutProps>) {
  const { isEnabled } = draftMode();
  const props = await initializeLayers(params);
  const lang = props.state.currentLang;

  return (
    <html lang={lang} className={fonts}>
      <head></head>
      <body className="font-sans antialiased">
        {children}
        {isEnabled && <Script src="/live-preview.mjs" />}
      </body>
    </html>
  );
}
