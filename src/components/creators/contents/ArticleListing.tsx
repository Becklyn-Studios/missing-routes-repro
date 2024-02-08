import React, { Suspense } from "react";
import { ArticleListingFacetFilters } from "@components/articlelisting/ArticleListingFacetFilters/ArticleListingFacetFilters";
import { ArticleListingResultList } from "@components/articlelisting/ArticleListingResultList/ArticleListingResultList";
import { NeoCmsArticleListing } from "@components/shared/Cms/NeoCmsArticleListing/NeoCmsArticleListing";
import { NeoTabs } from "@components/shared/NeoTabs/NeoTabs";
import {
  FALLBACK_COUNTRY,
  FALLBACK_MARKET,
  FALLBACK_SORTIMENT,
  MarketKey,
  SortimentKey,
  SortimentRegionKey,
  getSortimentIdFor,
} from "@lib/finders/shared/sortiments";
import { getFilterParams } from "@lib/finders/shared/util";
import { FALLBACK_LANG } from "@lib/i18n/locales";
import { ensureArray, first } from "@lib/util";
import { ContentfulRichText } from "@type/contentful/ContentfulRichText";
import { SearchParams } from "@type/common";
import { Rte } from "@lib/rte";
import { NeoToggle } from "@components/shared/NeoToggle/NeoToggle";
import { getCurrentLang } from "@lib/layers/state/server";
import { getTranslation } from "@lib/layers/translate/server";

export interface ArticleListingProps {
  mainGroupOpaccID: string;
  listOfProductLineOpaccIDs: string[];
  informationText?: ContentfulRichText;
  informationTextRetail?: ContentfulRichText;
  searchParams: SearchParams;
}

export const ArticleListing: React.FC<ArticleListingProps> = async (props) => {
  const t = getTranslation();
  const {
    mainGroupOpaccID,
    listOfProductLineOpaccIDs,
    searchParams = {},
  } = props;
  const lang = getCurrentLang() ?? FALLBACK_LANG;
  const market = (first(searchParams.market) ?? FALLBACK_MARKET) as MarketKey;
  const country = (first(searchParams.sortiments_value) ?? FALLBACK_COUNTRY) as
    | SortimentRegionKey
    | undefined;

  const sortimentId = (getSortimentIdFor({ market, country }) ??
    FALLBACK_SORTIMENT) as SortimentKey;

  const articleNumber = first(searchParams.articleNumber);
  const filters = getFilterParams(searchParams);

  const tabs = [
    {
      overline: t.contentful.text.articleListingTabDescription,
      headline: t.contentful.text.oem,
      hash: "oem",
    },
    {
      overline: t.contentful.text.articleListingTabDescription,
      headline: t.contentful.text.retail,
      hash: "retail",
    },
  ];

  const args = {
    groupOpaccId: mainGroupOpaccID,
    market,
    productLineOpaccIds: ensureArray(first(listOfProductLineOpaccIDs)),
    sortimentId,
    lang,
    filters: { ...filters, articleNumber },
  };

  const { informationText, informationTextRetail } = props;

  return (
    <NeoCmsArticleListing>
      <Suspense>
        <NeoTabs tabs={tabs} searchParam="market" resetParamsOnChange>
          {market === "oem" && informationText && (
            <div className="mb-7">
              <NeoToggle label={t.contentful.text.filterHintToggle}>
                <Rte content={informationText} />
              </NeoToggle>
            </div>
          )}
          {market === "retail" && informationTextRetail && (
            <div className="mb-7">
              <NeoToggle label={t.contentful.text.filterHintToggle}>
                <Rte content={informationTextRetail} />
              </NeoToggle>
            </div>
          )}
          <div className="flex flex-col gap-8">
            <ArticleListingFacetFilters
              defaultValues={{ sortiments_value: FALLBACK_COUNTRY }}
              {...args}
            />
            <ArticleListingResultList {...args} />
          </div>
        </NeoTabs>
      </Suspense>
    </NeoCmsArticleListing>
  );
};
