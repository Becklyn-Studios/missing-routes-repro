interface BallJointAndAdapterOem {
    type: string;
    material: string;
    upstreamThread: string;
    downstreamThread: string;
    surface: string;
}

export default function (ballJointAndAdapter: BallJointAndAdapterOem) {
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
        detailList: [
            {
                label: "surface",
                value: ballJointAndAdapter.surface,
            },
        ],
    } as const;
}
