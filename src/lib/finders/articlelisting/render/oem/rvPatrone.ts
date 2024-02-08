interface RvPatroneOem {
    boreDiameter: string;
    flowRate: string;
    design: string;
    flowRegulation: boolean;
    maxTemperature: string;
}

export default function (rvPatrone: RvPatroneOem) {
    return {
        bodyLists: [
            [
                {
                    label: "boreDiameter",
                    value: rvPatrone.boreDiameter,
                },
                {
                    label: "design",
                    value: rvPatrone.design,
                },
            ],
            [
                {
                    label: "flowRate",
                    value: rvPatrone.flowRate,
                },
                {
                    label: "flowRegulation",
                    translateValue: rvPatrone.flowRegulation
                        ? "flowRegulationTrue"
                        : "flowRegulationFalse",
                },
            ],
        ],
        detailList: [
            {
                label: "maxTemperature",
                value: rvPatrone.maxTemperature,
            },
        ],
    } as const;
}
