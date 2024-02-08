interface FilterOem {
    boreDiameter: string;
    sealingMaterial: string;
    meshSize: string;
    filterType: string;
    filterMaterial: string;
}

export default function (filter: FilterOem) {
    return {
        bodyLists: [
            [
                {
                    label: "boreDiameter",
                    value: filter.boreDiameter,
                },
                {
                    label: "meshSize",
                    value: filter.meshSize,
                },
            ],
            [
                {
                    label: "sealingMaterial",
                    value: filter.sealingMaterial,
                },
                {
                    label: "filterType",
                    value: filter.filterType,
                },
            ],
        ],
        detailList: [
            {
                label: "filterMaterial",
                value: filter.filterMaterial,
            },
        ],
    } as const;
}
