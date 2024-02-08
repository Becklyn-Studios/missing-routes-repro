export interface ServiceKeyOem {
    size: string;
    material: string;
    type: string;
}

export default function (serviceKey: ServiceKeyOem) {
    return {
        bodyLists: [
            [
                {
                    label: "size",
                    value: serviceKey.size,
                },
                {
                    label: "type",
                    value: serviceKey.type,
                },
            ],
            [
                {
                    label: "material",
                    value: serviceKey.material,
                },
            ],
        ],
    } as const;
}
