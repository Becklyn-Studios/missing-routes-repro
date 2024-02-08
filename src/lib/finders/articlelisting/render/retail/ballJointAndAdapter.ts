import { PackagingKey, getPackagingIcon } from "@lib/finders/shared/packaging";

interface BallJointAndAdapterRetail {
    type: string;
    material: string;
    upstreamThread: string;
    downstreamThread: string;
    surface: string;
    ean: string;
    packagingValue: PackagingKey;
}

export default function (ballJointAndAdapter: BallJointAndAdapterRetail) {
    return {
        bodyLists: [
            [
                {
                    label: "type",
                    value: ballJointAndAdapter.type,
                },
                {
                    label: "upstreamThread",
                    value: ballJointAndAdapter.upstreamThread,
                },
            ],
            [
                {
                    label: "material",
                    value: ballJointAndAdapter.material,
                },
                {
                    label: "downstreamThread",
                    value: ballJointAndAdapter.downstreamThread,
                },
            ],
        ],
        icons: [
            getPackagingIcon(ballJointAndAdapter.packagingValue)
                ? { icon: getPackagingIcon(ballJointAndAdapter.packagingValue) }
                : null,
        ],
        detailList: [
            {
                label: "surface",
                value: ballJointAndAdapter.surface,
            },
            {
                label: "ean",
                value: ballJointAndAdapter.ean,
            },
        ],
    } as const;
}
