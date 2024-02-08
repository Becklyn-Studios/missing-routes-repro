export const FILTER_TYPES = {
    INPUT: "input",
    MULTISELECT: "multiselect",
    DROPDOWN: "dropdown",
    CHECKBOX: "checkbox",
    SEARCH: "search",
} as const;

export type FilterKey = keyof typeof FILTER_TYPES;
export type FilterType = (typeof FILTER_TYPES)[FilterKey];

export interface FilterDefinition {
    type: FilterType;
    label: string;
    field: string;
    options?: { label: string; value: string }[];
}

export interface FilterConfig {
    oem: FilterDefinition[];
    retail: FilterDefinition[];
}

export interface FacetMapping {
    definition: FilterDefinition;
    value: string | string[];
}
