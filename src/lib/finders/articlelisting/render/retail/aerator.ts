import { PackagingKey, getPackagingIcon } from "@lib/finders/shared/packaging";

interface AeratorRetail {
    type: string;
    size: string;
    flowRate: string;
    streamType: string;
    showIconSLC: boolean;
    showIconAC: boolean;
    showIconSSR: boolean;
    packagingValue: PackagingKey;
    ean?: string;
    withWithoutHousing: string;
}

export default function (aerator: AeratorRetail) {
    return {
        bodyLists: [
            [
                {
                    value: aerator.withWithoutHousing,
                },
                {
                    label: "size",
                    value: aerator.size,
                },
            ],
            [
                {
                    label: "flowRate",
                    value: aerator.flowRate,
                },
                {
                    label: "streamType",
                    value: aerator.streamType,
                },
            ],
        ],
        icons: [
            aerator.showIconAC ? { icon: "featureAutoClean", label: "acLabel" } : null,
            aerator.showIconSLC ? { icon: "featureSlc", label: "slcLabel" } : null,
            aerator.showIconSSR ? { icon: "featureSsr", label: "ssrLabel" } : null,
            getPackagingIcon(aerator.packagingValue)
                ? { icon: getPackagingIcon(aerator.packagingValue) }
                : null,
        ].filter(icon => icon !== null),
        detailList: [
            {
                label: "ean",
                value: aerator.ean,
            },
        ],
    } as const;
}
