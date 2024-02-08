interface BypassValveOem {
    boreDiameter: string;
    pressureLoss: string;
}

export default function (bypassValve: BypassValveOem) {
    return {
        bodyLists: [
            [
                {
                    label: "boreDiameter",
                    value: bypassValve.boreDiameter,
                },
            ],
            [
                {
                    label: "pressureLoss",
                    value: bypassValve.pressureLoss,
                },
            ],
        ],
    } as const;
}
