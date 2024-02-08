import { FinderNoResultBox } from "@components/shared/FinderNoResultBox/FinderNoResultBox";
import { NeoArticleListItem } from "@components/shared/NeoArticleListItem/NeoArticleListItem";
import { getProducts } from "@lib/finders/articlelisting/api";
import { getArticleData } from "@lib/finders/articlelisting/article";
import { GetProductsQueryStringProps } from "@lib/finders/articlelisting/filters";
import { GetPartByIdProps, getPartById } from "@lib/finders/productfinder/api";
import { MarketKey } from "@lib/finders/shared/sortiments";
import { FALLBACK_LANG } from "@lib/i18n/locales";
import { getCurrentLang } from "@lib/layers/state/server";
import { getTranslation } from "@lib/layers/translate/server";
import React from "react";

export type ArticleListingResultListProps = (GetProductsQueryStringProps | GetPartByIdProps) & {
    market?: MarketKey;
};

export const ArticleListingResultList: React.FC<ArticleListingResultListProps> = async props => {
    const t = getTranslation();
    let productResults = null;

    let market = props.market;
    let lang = getCurrentLang() ?? FALLBACK_LANG;

    if ("articleNumber" in props) {
        productResults = await getPartById(props);
    } else {
        productResults = await getProducts(props);
        lang = props.lang;
    }

    const products = productResults?.hits?.hit?.map(({ id, fields }) => ({ id, ...fields })) ?? [];
    const count = productResults?.hits.found;

    return (
        <div className="article-listing-result-list">
            <div className="flex flex-col gap-4">
                <p className="result-count text-3xl font-semibold text-grey">
                    {count} {t.contentful.text.results}
                </p>
                {products && products.length > 0 ? (
                    products.map((product, key) => (
                        <NeoArticleListItem key={key} {...getArticleData(product, lang, market)} />
                    ))
                ) : (
                    <FinderNoResultBox />
                )}
            </div>
        </div>
    );
};
