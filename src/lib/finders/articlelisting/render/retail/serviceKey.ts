import { PackagingKey, getPackagingIcon } from "@lib/finders/shared/packaging";

export interface ServiceKeyOem {
    size: string;
    material: string;
    type: string;
    packing: string;
    ean: string;
    packagingValue: PackagingKey;
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
        icons: [
            getPackagingIcon(serviceKey.packagingValue)
                ? { icon: getPackagingIcon(serviceKey.packagingValue) }
                : null,
        ],
        detailList: [
            {
                label: "ean",
                value: serviceKey.ean,
            },
        ],
    } as const;
}
