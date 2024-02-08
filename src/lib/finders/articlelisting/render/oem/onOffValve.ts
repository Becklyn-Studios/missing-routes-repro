interface OnOffValveOem {
    inflow: string;
    maxFlowRate: string;
    pushButtonConnection: string;
    flowAdjustment: string;
    boreDiameter: string;
    operatingPressure: string;
    maxTemperature: string;
}

export default function (onOffValve: OnOffValveOem) {
    return {
        bodyLists: [
            [
                {
                    label: "inflow",
                    value: onOffValve.inflow,
                },
                {
                    label: "pushButtonConnection",
                    value: onOffValve.pushButtonConnection,
                },
            ],
            [
                {
                    label: "maxFlowRate",
                    value: onOffValve.maxFlowRate,
                },
                {
                    label: "flowAdjustment",
                    value: onOffValve.flowAdjustment,
                },
            ],
        ],
        detailList: [
            {
                label: "boreDiameter",
                value: onOffValve.boreDiameter,
            },
            {
                label: "operatingPressure",
                value: onOffValve.operatingPressure,
            },
            {
                label: "maxTemperature",
                value: onOffValve.maxTemperature,
            },
        ],
    } as const;
}
