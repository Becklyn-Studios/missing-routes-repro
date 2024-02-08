import { first } from "@lib/util";
import { SearchParams } from "@type/common";
import { ReadonlyURLSearchParams } from "next/navigation";

export const searchParamsToObject = (params: ReadonlyURLSearchParams): SearchParams => {
    const record: SearchParams = {};
    params.forEach((value, key) => {
        if (record.hasOwnProperty(key)) {
            const currentValue = record[key];
            if (Array.isArray(currentValue)) {
                currentValue.push(value);
            } else {
                if (!!currentValue) {
                    record[key] = [currentValue, value];
                }
            }
        } else {
            record[key] = value;
        }
    });
    return record;
};

export const getFilterParams = (params: SearchParams) => {
    return Object.entries(params)
        .filter(([key]) => key.startsWith("free_"))
        .reduce((acc, [key, value]) => {
            const filter = first(value);
            if (filter) {
                acc[key] = filter;
            }
            return acc;
        }, {} as SearchParams);
};

export const getNonFilterParamas = (params: SearchParams) => {
    return Object.entries(params)
        .filter(([key]) => !key.startsWith("free_"))
        .reduce((acc, [key, value]) => {
            const filter = first(value);
            if (filter) {
                acc[key] = filter;
            }
            return acc;
        }, {} as SearchParams);
};
