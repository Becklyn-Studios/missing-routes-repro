interface DiverterOem {
    material: string;
    operation: string;
    lockable: boolean;
    checkValveOption: boolean;
    installationNote: string;
}

export default function (diverter: DiverterOem) {
    return {
        bodyLists: [
            [
                {
                    label: "material",
                    value: diverter.material,
                },
                {
                    label: "lockable",
                    translateValue: diverter.lockable ? "lockableValueTrue" : "lockableValueFalse",
                },
            ],
            [
                {
                    label: "operation",
                    value: diverter.operation,
                },
                {
                    label: "checkValveOption",
                    translateValue: diverter.checkValveOption
                        ? "checkValveOptionValueTrue"
                        : "checkValveOptionValueFalse",
                },
            ],
        ],
        detailList: [
            {
                label: "installationNote",
                value: diverter.installationNote,
            },
        ],
    } as const;
}
