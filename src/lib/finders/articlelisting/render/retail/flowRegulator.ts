import { PackagingKey, getPackagingIcon } from "@lib/finders/shared/packaging";

interface FlowRegulatorOem {
    placeOfInstallation: string;
    flowRate: string;
    pressureRange: string;
    boreDiameter: string;
    packagingValue: PackagingKey;
    temperatureRange: string;
    ean: string;
}

export default function (flowRegulator: FlowRegulatorOem) {
    return {
        bodyLists: [
            [
                {
                    label: "placeOfInstallation",
                    value: flowRegulator.placeOfInstallation,
                },
                {
                    label: "pressureRange",
                    value: flowRegulator.pressureRange,
                },
            ],
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
        ],
        icons: [
            getPackagingIcon(flowRegulator.packagingValue)
                ? { icon: getPackagingIcon(flowRegulator.packagingValue) }
                : null,
        ],
        detailList: [
            {
                label: "temperatureRange",
                value: flowRegulator.temperatureRange,
            },
            {
                label: "ean",
                value: flowRegulator.ean,
            },
        ],
    } as const;
}
