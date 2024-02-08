interface PressureRegulatorOem {
    operatingPressure: string;
    design: string;
    function: string;
    connectionThread: string;
    boreDiameter: string;
    outletPressure: string;
    maxTemperature: string;
}

export default function (pressureRegulator: PressureRegulatorOem) {
    return {
        bodyLists: [
            [
                {
                    label: "operatingPressure",
                    value: pressureRegulator.operatingPressure,
                },
                {
                    label: "function",
                    value: pressureRegulator.function,
                },
            ],
            [
                {
                    label: "design",
                    value: pressureRegulator.design,
                },
                {
                    label: "ctbd",
                    value: `${pressureRegulator.connectionThread}/${pressureRegulator.boreDiameter}`,
                },
            ],
        ],
        detailList: [
            {
                label: "installationNote",
                value: pressureRegulator.outletPressure,
            },
            {
                label: "maxTemperature",
                value: pressureRegulator.maxTemperature,
            },
        ],
    } as const;
}
