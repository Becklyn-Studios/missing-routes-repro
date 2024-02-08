"use client";

import React from "react";
import { NeoDownloadLink } from "@components/shared/NeoDownloadLink/NeoDownloadLink";
import { NeoLink } from "@components/shared/NeoLink/NeoLink";
import { NeoLoadingSpinner } from "@components/shared/NeoLoadingSpinner/NeoLoadingSpinner";
import {
  DownloadDocumentType,
  getDocumentDownloadLink,
} from "@lib/finders/articlelisting/api";
import { useMutation } from "@lib/hook/useMutation";
import { useIsLoggedIn } from "@lib/login/client";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { useTranslation } from "@lib/layers/translate/client";

export interface ArticleListingDownloadLinkProps {
  itemNumber: number | string;
  documentType: DownloadDocumentType;
}

export const ArticleListingDownloadLink: React.FC<
  ArticleListingDownloadLinkProps
> = ({ itemNumber, documentType }) => {
  const t = useTranslation();

  const label =
    documentType === "SPECSHEET"
      ? t.contentful.text.specsheet
      : documentType === "DRAWING"
        ? t.contentful.text.drawing
        : t.contentful.text.certificate;

  const [fetch, { data, isLoading, isSuccess }] = useMutation(
    getDocumentDownloadLink,
  );
  const isLoggedIn = useIsLoggedIn();
  const canAccess = documentType === "SPECSHEET" || isLoggedIn;

  if (isLoading) {
    return <NeoLoadingSpinner />;
  }

  if (isSuccess && !!data) {
    return (
      <>
        {data.map((data, key) => (
          <NeoDownloadLink
            key={key}
            href={data.fileName}
            fileType="application/pdf"
            fileSize={data.fileSize}
            fileName={data.realFileName}
          >
            {data.realFileName}
          </NeoDownloadLink>
        ))}
      </>
    );
  }

  return (
    <NeoLink
      hideMarker={!canAccess}
      onClick={() => {
        if (canAccess) {
          fetch({ itemNumber, documentType });
        }
      }}
    >
      {!canAccess && <NeoIcon icon="lock" />}
      {label}
    </NeoLink>
  );
};
