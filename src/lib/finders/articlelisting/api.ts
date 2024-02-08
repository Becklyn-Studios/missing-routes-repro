import {
    GetFacetsQueryStringProps,
    GetProductsQueryStringProps,
    getFacetsQueryString,
    getProductsQueryString,
} from "./filters";

export interface GetFacetsResults {
    hits: {
        found: number;
        start: number;
        hit: {
            id: string;
            fields: {
                opacc_id: string;
                sortkey: string;
                type: string;
                parent_id: string;
                product_family_id: string;
                maingroup_id: string;
                number: string;
            } & Record<string, string | string[]>;
        }[];
    };
    facets: Record<string, { buckets: { value: string; count: number }[] }>;
}

export const getFacets = async (props: GetFacetsQueryStringProps) => {
    const query = getFacetsQueryString(props);
    return await fetch(
        `${process.env.BASE_API_URL}/${process.env.PRODUCT_SEARCH_API_URL}/search?${query}`
    ).then(data => data.json() as Promise<GetFacetsResults>);
};

export interface GetProductsResults {
    hits: {
        found: number;
        start: number;
        hit: {
            id: string;
            fields: {
                opacc_id: string;
                sortkey: string;
                type: string;
                parent_id: string;
                product_family_id: string;
                maingroup_id: string;
            } & Record<string, string | string[]>;
        }[];
    };
}

export const getProducts = async (props: GetProductsQueryStringProps) => {
    const query = getProductsQueryString(props);
    return await fetch(
        `${process.env.BASE_API_URL}/${process.env.PRODUCT_SEARCH_API_URL}/search?${query}`
    ).then(data => data.json() as Promise<GetFacetsResults>);
};

export type DownloadDocumentType = "CERTIFICATE" | "DRAWING" | "SPECSHEET";

export interface DownloadDocument {
    fileName: string;
    fileSize: number;
    realFileName: string;
}

export const getDocumentDownloadLink = async ({
    itemNumber,
    documentType,
}: {
    itemNumber: string | number;
    documentType: DownloadDocumentType;
}) =>
    fetch(
        `${
            documentType === "SPECSHEET"
                ? process.env.NEXT_PUBLIC_SPEC_SHEET_LIST_URL
                : process.env.NEXT_PUBLIC_DOCUMENT_LIST_URL
        }?documentType=${documentType.toLowerCase()}&itemNumber=${itemNumber}`
    ).then(response => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json() as Promise<DownloadDocument[]>;
    });
