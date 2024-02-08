interface FlowRegulatorOem {
    flowRate: string;
    pressureRange: string;
    boreDiameter: string;
    temperatureRange: string;
}

export default function (flowRegulator: FlowRegulatorOem) {
    return {
        bodyLists: [
            [
                {
                    label: "flowRate",
                    value: flowRegulator.flowRate,
                },
                {
                    label: "boreDiameter",
                    value: flowRegulator.boreDiameter,
                },
            ],
            [
                {
                    label: "pressureRange",
                    value: flowRegulator.pressureRange,
                },
            ],
        ],
        detailList: [
            {
                label: "temperatureRange",
                value: flowRegulator.temperatureRange,
            },
        ],
    } as const;
}
