import { getAvailableI18nPairs } from "@lib/i18n/locales";
import { PropsWithChildren } from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  const pairs = getAvailableI18nPairs();

  if (!pairs) {
    throw Error("No regions or no langs could be found.");
  }

  return pairs;
}

interface LayoutProps {
  params: {
    region: string;
    lang: string;
  };
}

export default async function Layout({
  params,
  children,
}: PropsWithChildren<LayoutProps>) {
  const { lang } = params;
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
